-- Sprint 2: site_settings table + public read policies for CMS content

create table if not exists public.site_settings (
  id integer primary key default 1 check (id = 1),
  settings jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

insert into public.site_settings (id, settings)
values (1, '{}'::jsonb)
on conflict (id) do nothing;

alter table public.site_settings enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'homepage_settings'
      and policyname = 'Public read homepage_settings'
  ) then
    create policy "Public read homepage_settings"
      on public.homepage_settings
      for select
      to anon, authenticated
      using (true);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'site_settings'
      and policyname = 'Public read site_settings'
  ) then
    create policy "Public read site_settings"
      on public.site_settings
      for select
      to anon, authenticated
      using (true);
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'site_settings'
      and policyname = 'Admins read site_settings'
  ) then
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
  end if;
end $$;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'site_settings'
      and policyname = 'Admins update site_settings'
  ) then
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
  end if;
end $$;
