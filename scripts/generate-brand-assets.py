"""Generate favicon PNG sizes and og-image.png from the official site logo."""

import base64
import io
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
LOGO_PATH = ROOT / "src" / "assets" / "logo.png"

GOLD_MID = (196, 160, 98)
GOLD_DARK = (143, 111, 56)
CHAMPAGNE_TOP = (236, 226, 206)
CHAMPAGNE_BOTTOM = (204, 186, 158)
TEXT_DARK = (47, 40, 32)
TEXT_MUTED = (85, 74, 58)
BG_DARK = (26, 21, 16)


def load_font(size: int, bold: bool = False):
    candidates = [
        "C:/Windows/Fonts/georgiab.ttf" if bold else "C:/Windows/Fonts/georgia.ttf",
        "C:/Windows/Fonts/timesbd.ttf" if bold else "C:/Windows/Fonts/times.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/System/Library/Fonts/Supplemental/Georgia Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Georgia.ttf",
    ]
    for path in candidates:
        try:
            return ImageFont.truetype(path, size)
        except OSError:
            continue
    return ImageFont.load_default()


def load_logo() -> Image.Image:
    if not LOGO_PATH.exists():
        raise FileNotFoundError(f"Official logo not found: {LOGO_PATH}")
    return Image.open(LOGO_PATH).convert("RGBA")


def vertical_gradient(size: tuple[int, int], top, bottom):
    width, height = size
    img = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] + (bottom[i] - top[i]) * ratio) for i in range(3))
        draw.line((0, y, width, y), fill=color)
    return img


def paste_logo_centered(base: Image.Image, logo: Image.Image, max_width: int, y_center: int | None = None):
    ratio = max_width / logo.width
    new_size = (max_width, int(logo.height * ratio))
    resized = logo.resize(new_size, Image.Resampling.LANCZOS)
    x = (base.width - new_size[0]) // 2
    y = y_center - new_size[1] // 2 if y_center is not None else (base.height - new_size[1]) // 2
    base.paste(resized, (x, y), resized)


def make_og_image(logo: Image.Image) -> Image.Image:
    width, height = 1200, 630
    img = vertical_gradient((width, height), CHAMPAGNE_TOP, CHAMPAGNE_BOTTOM)
    draw = ImageDraw.Draw(img)

    inset = 48
    draw.rounded_rectangle(
        (inset, inset, width - inset - 1, height - inset - 1),
        radius=18,
        outline=GOLD_MID,
        width=3,
    )

    paste_logo_centered(img, logo, max_width=620, y_center=250)

    title_font = load_font(42, bold=True)
    subtitle_font = load_font(28, bold=False)
    url_font = load_font(26, bold=False)

    cx = width // 2
    draw.text((cx, 430), "PH Luxury Angels Salon", font=title_font, fill=TEXT_DARK, anchor="mm")
    draw.text(
        (cx, 485),
        "Prémium hajhosszabbítás és fodrász szolgáltatások",
        font=subtitle_font,
        fill=TEXT_MUTED,
        anchor="mm",
    )
    draw.text((cx, height - 72), "luxuryangels.hu", font=url_font, fill=GOLD_DARK, anchor="mm")

    return img


def make_favicon(logo: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (*BG_DARK, 255))
    draw = ImageDraw.Draw(canvas)
    radius = max(4, size // 8)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=BG_DARK)

    padding = int(size * 0.14)
    max_logo_width = size - padding * 2
    ratio = max_logo_width / logo.width
    new_size = (max_logo_width, int(logo.height * ratio))
    resized = logo.resize(new_size, Image.Resampling.LANCZOS)
    x = (size - new_size[0]) // 2
    y = (size - new_size[1]) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def make_favicon_svg(png_bytes: bytes) -> str:
    encoded = base64.b64encode(png_bytes).decode("ascii")
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">'
        f'<image href="data:image/png;base64,{encoded}" width="48" height="48"/>'
        "</svg>"
    )


def main():
    PUBLIC.mkdir(parents=True, exist_ok=True)
    logo = load_logo()

    sizes = {
        "favicon-32.png": 32,
        "favicon-48.png": 48,
        "apple-touch-icon.png": 180,
        "icon-192.png": 192,
        "icon-512.png": 512,
    }

    favicon_48_buffer = io.BytesIO()
    make_favicon(logo, 48).save(favicon_48_buffer, format="PNG", optimize=True)
    (PUBLIC / "favicon.svg").write_text(
        make_favicon_svg(favicon_48_buffer.getvalue()),
        encoding="utf-8",
    )

    for name, size in sizes.items():
        make_favicon(logo, size).save(PUBLIC / name, format="PNG", optimize=True)

    make_og_image(logo).save(PUBLIC / "og-image.png", format="PNG", optimize=True)
    print(f"Generated brand assets from {LOGO_PATH.name}")


if __name__ == "__main__":
    main()
