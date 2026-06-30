"""Generate favicon PNG sizes and og-image.png for Luxury Angels."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

BG_DARK = (26, 21, 16)
GOLD_LIGHT = (226, 200, 138)
GOLD_MID = (196, 160, 98)
GOLD_DARK = (143, 111, 56)
CHAMPAGNE = (221, 208, 184)
CREAM = (228, 214, 192)
TEXT_DARK = (47, 40, 32)


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


def draw_ph_monogram(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], font):
    x0, y0, x1, y1 = box
    cx = (x0 + x1) // 2
    cy = (y0 + y1) // 2 + int((y1 - y0) * 0.04)
    draw.text((cx, cy), "PH", font=font, fill=GOLD_MID, anchor="mm")
    # subtle highlight stroke effect via offset lighter text
    draw.text((cx, cy - 1), "PH", font=font, fill=GOLD_LIGHT, anchor="mm")


def make_favicon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (*BG_DARK, 255))
    draw = ImageDraw.Draw(img)
    radius = max(4, size // 8)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=BG_DARK)
    padding = int(size * 0.12)
    font_size = max(12, int(size * 0.42))
    font = load_font(font_size, bold=True)
    draw_ph_monogram(draw, (padding, padding, size - padding, size - padding), font)
    return img


def vertical_gradient(size: tuple[int, int], top, bottom):
    width, height = size
    img = Image.new("RGB", size, top)
    draw = ImageDraw.Draw(img)
    for y in range(height):
        ratio = y / max(height - 1, 1)
        color = tuple(int(top[i] + (bottom[i] - top[i]) * ratio) for i in range(3))
        draw.line((0, y, width, y), fill=color)
    return img


def make_og_image() -> Image.Image:
    width, height = 1200, 630
    img = vertical_gradient((width, height), (236, 226, 206), (204, 186, 158))
    draw = ImageDraw.Draw(img)

    # decorative frame
    inset = 48
    draw.rounded_rectangle(
        (inset, inset, width - inset, height - inset),
        radius=18,
        outline=GOLD_MID,
        width=3,
    )

    # gold line accents
    draw.line((inset + 80, 150, width - inset - 80, 150), fill=GOLD_DARK, width=2)
    draw.line((inset + 80, height - 150, width - inset - 80, height - 150), fill=GOLD_DARK, width=2)

    monogram_font = load_font(120, bold=True)
    title_font = load_font(72, bold=True)
    subtitle_font = load_font(34, bold=False)
    url_font = load_font(30, bold=False)

    cx, cy = width // 2, 190
    draw.text((cx, cy), "PH", font=monogram_font, fill=GOLD_MID, anchor="mm")
    draw.text((cx, cy - 2), "PH", font=monogram_font, fill=GOLD_LIGHT, anchor="mm")

    draw.text((cx, 300), "Luxury Angels", font=title_font, fill=TEXT_DARK, anchor="mm")
    draw.text(
        (cx, 375),
        "Hair Extensions & Hair Styling",
        font=subtitle_font,
        fill=(85, 74, 58),
        anchor="mm",
    )
    draw.text((cx, height - 120), "luxuryangels.hu", font=url_font, fill=GOLD_DARK, anchor="mm")

    return img


def main():
    PUBLIC.mkdir(parents=True, exist_ok=True)

    sizes = {
        "favicon-32.png": 32,
        "favicon-48.png": 48,
        "apple-touch-icon.png": 180,
        "icon-192.png": 192,
        "icon-512.png": 512,
    }

    for name, size in sizes.items():
        make_favicon(size).save(PUBLIC / name, format="PNG", optimize=True)

    make_og_image().save(PUBLIC / "og-image.png", format="PNG", optimize=True)
    print("Generated brand assets in public/")


if __name__ == "__main__":
    main()
