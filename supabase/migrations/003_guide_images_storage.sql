-- Sprint 3: guide image uploads storage bucket

insert into storage.buckets (id, name, public)
values ('guide-images', 'guide-images', true)
on conflict (id) do nothing;

create policy "Public read guide images"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'guide-images');

create policy "Admins upload guide images"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'guide-images'
    and exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Admins update guide images"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'guide-images'
    and exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );

create policy "Admins delete guide images"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'guide-images'
    and exists (
      select 1
      from public.admin_users
      where admin_users.id = auth.uid()
    )
  );
