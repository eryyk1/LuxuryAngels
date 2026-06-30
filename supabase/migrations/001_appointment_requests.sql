-- Run this in the Supabase SQL editor or via Supabase CLI migrations.

create table if not exists public.appointment_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  service text not null,
  message text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now()
);

create index if not exists appointment_requests_created_at_idx
  on public.appointment_requests (created_at desc);

create index if not exists appointment_requests_status_idx
  on public.appointment_requests (status);

alter table public.appointment_requests enable row level security;

-- No public policies: the service role key (server-side only) bypasses RLS.
