-- SmartMaterialCalc CMS schema (run in Supabase SQL editor)

create extension if not exists "pgcrypto";

create table if not exists public.admin_users (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  role text not null default 'owner' check (role in ('owner')),
  created_at timestamptz not null default now()
);

create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  status text not null default 'draft' check (status in ('draft', 'published')),
  title text not null,
  seo_title text,
  excerpt text not null,
  category text not null,
  date_published date not null,
  date_modified date not null,
  hero_image text not null,
  calculator_slug text,
  related_guide_slugs text[] not null default '{}',
  related_calculator_slugs text[] not null default '{}',
  content jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists guides_status_idx on public.guides (status);
create index if not exists guides_date_modified_idx on public.guides (date_modified desc);

create table if not exists public.homepage_settings (
  id integer primary key default 1 check (id = 1),
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.homepage_settings (id, settings)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

create table if not exists public.site_settings (
  id integer primary key default 1 check (id = 1),
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id, settings)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

alter table public.guides enable row level security;
alter table public.admin_users enable row level security;
alter table public.homepage_settings enable row level security;
alter table public.site_settings enable row level security;

create policy "Public read published guides"
  on public.guides
  for select
  to anon, authenticated
  using (status = 'published');

create policy "Admins manage guides"
  on public.guides
  for all
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Admins read admin_users"
  on public.admin_users
  for select
  to authenticated
  using (id = auth.uid());

create policy "Public read homepage_settings"
  on public.homepage_settings
  for select
  to anon, authenticated
  using (true);

create policy "Admins read homepage_settings"
  on public.homepage_settings
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Admins update homepage_settings"
  on public.homepage_settings
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Public read site_settings"
  on public.site_settings
  for select
  to anon, authenticated
  using (true);

create policy "Admins read site_settings"
  on public.site_settings
  for select
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Admins update site_settings"
  on public.site_settings
  for update
  to authenticated
  using (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  )
  with check (
    exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );
