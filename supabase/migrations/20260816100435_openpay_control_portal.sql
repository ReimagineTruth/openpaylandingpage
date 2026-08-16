-- OpenPay control portal — complete public schema
-- Blog CMS, site pages, staff, wallet investigation, KYC, ledger, audit.
-- Run via: supabase db push  OR paste into the Supabase SQL editor.

create extension if not exists pgcrypto;
create extension if not exists pg_trgm;

create schema if not exists private;

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Staff (linked to auth.users — do not use a table named users)
-- ---------------------------------------------------------------------------

create table if not exists public.staff_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  role text not null default 'support'
    check (role in ('admin', 'support', 'auditor')),
  is_active boolean not null default true,
  last_active_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.staff_profiles is 'Control-portal operators. Role lives here and in auth.app_metadata, never user_metadata.';

drop trigger if exists staff_profiles_set_updated_at on public.staff_profiles;
create trigger staff_profiles_set_updated_at
before update on public.staff_profiles
for each row execute function public.set_updated_at();

create or replace function private.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.staff_profiles
    where id = (select auth.uid())
      and is_active = true
  );
$$;

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.staff_profiles
    where id = (select auth.uid())
      and is_active = true
      and role = 'admin'
  );
$$;

revoke all on function private.is_staff() from public, anon;
revoke all on function private.is_admin() from public, anon;
grant execute on function private.is_staff() to authenticated, service_role;
grant execute on function private.is_admin() to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Blog
-- ---------------------------------------------------------------------------

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  display_date text not null,
  author text not null default 'OpenPay Team',
  category text not null check (category in ('Product', 'Guide', 'Update', 'Insight', 'Security')),
  summary text not null default '',
  meta text not null default '',
  tags text[] not null default '{}',
  hero text not null default '',
  content text not null default '',
  cta_text text not null default '',
  cta_link text not null default '',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint blog_posts_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

comment on column public.blog_posts.summary is 'Listing description (avoid reserved name desc).';
comment on column public.blog_posts.display_date is 'Human date shown on the site, e.g. Aug 16, 2026.';

-- Evolve legacy blog_posts if it already exists with older columns
alter table public.blog_posts add column if not exists summary text not null default '';
alter table public.blog_posts add column if not exists published boolean not null default false;
alter table public.blog_posts add column if not exists published_at timestamptz;
alter table public.blog_posts add column if not exists display_date text;

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'blog_posts' and column_name = 'desc'
  ) then
    update public.blog_posts
    set summary = coalesce(nullif(summary, ''), "desc")
    where summary = '' and "desc" is not null;
  end if;
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'blog_posts' and column_name = 'date'
  ) then
    update public.blog_posts
    set display_date = coalesce(nullif(display_date, ''), date)
    where display_date is null or display_date = '';
  end if;
end $$;

alter table public.blog_posts alter column display_date set default '';
update public.blog_posts set display_date = coalesce(display_date, '') where display_date is null;
alter table public.blog_posts alter column display_date set not null;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute function public.set_updated_at();

create index if not exists blog_posts_slug_idx on public.blog_posts (slug);
create index if not exists blog_posts_category_idx on public.blog_posts (category);
create index if not exists blog_posts_published_idx
  on public.blog_posts (published_at desc nulls last)
  where published = true;
create index if not exists blog_posts_tags_gin_idx on public.blog_posts using gin (tags);

-- ---------------------------------------------------------------------------
-- Site copy
-- ---------------------------------------------------------------------------

create table if not exists public.site_content (
  id bigint generated always as identity primary key,
  page text not null,
  section text not null,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  constraint site_content_page_section_key unique (page, section)
);

drop trigger if exists site_content_set_updated_at on public.site_content;
create trigger site_content_set_updated_at
before update on public.site_content
for each row execute function public.set_updated_at();

create index if not exists site_content_page_idx on public.site_content (page);

-- ---------------------------------------------------------------------------
-- Wallet investigation
-- ---------------------------------------------------------------------------

create table if not exists public.wallet_accounts (
  id uuid primary key default gen_random_uuid(),
  username text not null,
  account_no text not null,
  email text not null,
  display_name text not null,
  status text not null default 'active'
    check (status in ('active', 'restricted', 'frozen', 'suspended')),
  risk text not null default 'low'
    check (risk in ('low', 'medium', 'high')),
  ousd_balance numeric(18,2) not null default 0 check (ousd_balance >= 0),
  pi_balance numeric(18,8) not null default 0 check (pi_balance >= 0),
  flags text[] not null default '{}',
  restriction_reason text,
  last_active_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint wallet_accounts_account_no_format
    check (account_no ~ '^OP-[0-9]{4}-[0-9]{4}$')
);

create unique index if not exists wallet_accounts_username_lower_idx
  on public.wallet_accounts (lower(username));
create unique index if not exists wallet_accounts_account_no_idx
  on public.wallet_accounts (account_no);
create unique index if not exists wallet_accounts_email_lower_idx
  on public.wallet_accounts (lower(email));
create index if not exists wallet_accounts_status_idx on public.wallet_accounts (status);
create index if not exists wallet_accounts_risk_idx on public.wallet_accounts (risk);
create index if not exists wallet_accounts_search_trgm_idx
  on public.wallet_accounts
  using gin ((username || ' ' || account_no || ' ' || email || ' ' || display_name) gin_trgm_ops);

drop trigger if exists wallet_accounts_set_updated_at on public.wallet_accounts;
create trigger wallet_accounts_set_updated_at
before update on public.wallet_accounts
for each row execute function public.set_updated_at();

create table if not exists public.kyc_profiles (
  account_id uuid primary key references public.wallet_accounts (id) on delete cascade,
  status text not null default 'pending'
    check (status in ('approved', 'pending', 'rejected', 'expired')),
  full_name text not null,
  dob date,
  nationality text,
  id_type text,
  id_number_masked text,
  address text,
  verified_at timestamptz,
  notes text,
  updated_at timestamptz not null default now()
);

drop trigger if exists kyc_profiles_set_updated_at on public.kyc_profiles;
create trigger kyc_profiles_set_updated_at
before update on public.kyc_profiles
for each row execute function public.set_updated_at();

create table if not exists public.wallet_transactions (
  id bigint generated always as identity primary key,
  account_id uuid not null references public.wallet_accounts (id) on delete cascade,
  occurred_at timestamptz not null default now(),
  tx_type text not null,
  method text not null,
  counterparty text not null default '',
  amount numeric(18,2) not null,
  status text not null default 'Completed',
  note text
);

create index if not exists wallet_transactions_account_occurred_idx
  on public.wallet_transactions (account_id, occurred_at desc);

create table if not exists public.wallet_ledger (
  id bigint generated always as identity primary key,
  account_id uuid not null references public.wallet_accounts (id) on delete restrict,
  direction text not null check (direction in ('credit', 'debit')),
  amount numeric(18,2) not null check (amount > 0),
  reason text not null,
  actor_email text,
  created_at timestamptz not null default now()
);

create index if not exists wallet_ledger_account_idx
  on public.wallet_ledger (account_id, created_at desc);

create or replace function public.apply_wallet_ledger()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if new.direction = 'credit' then
    update public.wallet_accounts
    set ousd_balance = ousd_balance + new.amount
    where id = new.account_id;
  else
    update public.wallet_accounts
    set ousd_balance = ousd_balance - new.amount
    where id = new.account_id;
  end if;
  return new;
end;
$$;

drop trigger if exists wallet_ledger_apply on public.wallet_ledger;
create trigger wallet_ledger_apply
after insert on public.wallet_ledger
for each row execute function public.apply_wallet_ledger();

create table if not exists public.account_actions (
  id bigint generated always as identity primary key,
  account_id uuid not null references public.wallet_accounts (id) on delete cascade,
  action text not null check (action in ('restrict', 'freeze', 'suspend', 'restore', 'flag', 'note')),
  reason text,
  detail text not null default '',
  actor_email text,
  created_at timestamptz not null default now()
);

create index if not exists account_actions_account_idx
  on public.account_actions (account_id, created_at desc);

create table if not exists public.admin_audit_log (
  id bigint generated always as identity primary key,
  area text not null,
  detail text not null,
  actor_email text,
  created_at timestamptz not null default now()
);

create index if not exists admin_audit_log_created_idx
  on public.admin_audit_log (created_at desc);

-- ---------------------------------------------------------------------------
-- Staff RPCs (invoker + explicit auth check)
-- ---------------------------------------------------------------------------

create or replace function public.search_wallet_accounts(p_query text)
returns setof public.wallet_accounts
language sql
stable
security invoker
set search_path = ''
as $$
  select *
  from public.wallet_accounts
  where (select private.is_staff())
    and (
      p_query is null
      or length(trim(p_query)) = 0
      or username ilike '%' || trim(p_query) || '%'
      or account_no ilike '%' || replace(trim(p_query), ' ', '') || '%'
      or email ilike '%' || trim(p_query) || '%'
      or display_name ilike '%' || trim(p_query) || '%'
    )
  order by
    case status when 'suspended' then 0 when 'frozen' then 1 when 'restricted' then 2 else 3 end,
    last_active_at desc nulls last;
$$;

create or replace function public.adjust_wallet_balance(
  p_account_id uuid,
  p_direction text,
  p_amount numeric,
  p_reason text
)
returns public.wallet_accounts
language plpgsql
security invoker
set search_path = ''
as $$
declare
  rec public.wallet_accounts;
begin
  if not private.is_staff() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  if p_direction not in ('credit', 'debit') then
    raise exception 'direction must be credit or debit';
  end if;
  if p_amount is null or p_amount <= 0 then
    raise exception 'amount must be greater than 0';
  end if;
  if p_reason is null or length(trim(p_reason)) = 0 then
    raise exception 'reason is required';
  end if;

  insert into public.wallet_ledger (account_id, direction, amount, reason, actor_email)
  values (
    p_account_id,
    p_direction,
    p_amount,
    trim(p_reason),
    coalesce((select email from public.staff_profiles where id = (select auth.uid())), '')
  );

  insert into public.admin_audit_log (area, detail, actor_email)
  values (
    'account',
    p_direction || ' ' || p_amount::text || ' OUSD · ' || trim(p_reason),
    coalesce((select email from public.staff_profiles where id = (select auth.uid())), '')
  );

  select * into rec from public.wallet_accounts where id = p_account_id;
  return rec;
end;
$$;

create or replace function public.set_wallet_account_status(
  p_account_id uuid,
  p_status text,
  p_reason text default null,
  p_detail text default ''
)
returns public.wallet_accounts
language plpgsql
security invoker
set search_path = ''
as $$
declare
  rec public.wallet_accounts;
  action_name text;
begin
  if not private.is_staff() then
    raise exception 'not authorized' using errcode = '42501';
  end if;
  if p_status not in ('active', 'restricted', 'frozen', 'suspended') then
    raise exception 'invalid status';
  end if;
  if p_status <> 'active' and (p_reason is null or length(trim(p_reason)) = 0) then
    raise exception 'reason is required to restrict, freeze, or suspend';
  end if;

  action_name := case p_status
    when 'active' then 'restore'
    when 'restricted' then 'restrict'
    when 'frozen' then 'freeze'
    else 'suspend'
  end;

  update public.wallet_accounts
  set
    status = p_status,
    restriction_reason = case when p_status = 'active' then null else trim(p_reason) end,
    flags = case
      when p_status = 'active' then array_remove(flags, 'abuse-review')
      when not ('abuse-review' = any (flags)) then flags || '{abuse-review}'
      else flags
    end
  where id = p_account_id
  returning * into rec;

  insert into public.account_actions (account_id, action, reason, detail, actor_email)
  values (
    p_account_id,
    action_name,
    p_reason,
    coalesce(p_detail, ''),
    coalesce((select email from public.staff_profiles where id = (select auth.uid())), '')
  );

  insert into public.admin_audit_log (area, detail, actor_email)
  values (
    'account',
    action_name || ' · ' || rec.username || ' · ' || rec.account_no,
    coalesce((select email from public.staff_profiles where id = (select auth.uid())), '')
  );

  return rec;
end;
$$;

revoke all on function public.search_wallet_accounts(text) from public, anon;
revoke all on function public.adjust_wallet_balance(uuid, text, numeric, text) from public, anon;
revoke all on function public.set_wallet_account_status(uuid, text, text, text) from public, anon;
grant execute on function public.search_wallet_accounts(text) to authenticated, service_role;
grant execute on function public.adjust_wallet_balance(uuid, text, numeric, text) to authenticated, service_role;
grant execute on function public.set_wallet_account_status(uuid, text, text, text) to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------

alter table public.staff_profiles enable row level security;
alter table public.blog_posts enable row level security;
alter table public.site_content enable row level security;
alter table public.wallet_accounts enable row level security;
alter table public.kyc_profiles enable row level security;
alter table public.wallet_transactions enable row level security;
alter table public.wallet_ledger enable row level security;
alter table public.account_actions enable row level security;
alter table public.admin_audit_log enable row level security;

alter table public.staff_profiles force row level security;
alter table public.blog_posts force row level security;
alter table public.site_content force row level security;
alter table public.wallet_accounts force row level security;
alter table public.kyc_profiles force row level security;
alter table public.wallet_transactions force row level security;
alter table public.wallet_ledger force row level security;
alter table public.account_actions force row level security;
alter table public.admin_audit_log force row level security;

drop policy if exists blog_posts_public_read on public.blog_posts;
create policy blog_posts_public_read
  on public.blog_posts
  for select
  to anon, authenticated
  using (published = true);

drop policy if exists blog_posts_staff_read on public.blog_posts;
create policy blog_posts_staff_read
  on public.blog_posts
  for select
  to authenticated
  using ((select private.is_staff()));

drop policy if exists blog_posts_staff_write on public.blog_posts;
create policy blog_posts_staff_write
  on public.blog_posts
  for all
  to authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

drop policy if exists site_content_public_read on public.site_content;
create policy site_content_public_read
  on public.site_content
  for select
  to anon, authenticated
  using (true);

drop policy if exists site_content_staff_write on public.site_content;
create policy site_content_staff_write
  on public.site_content
  for all
  to authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

drop policy if exists staff_profiles_self_or_staff_read on public.staff_profiles;
create policy staff_profiles_self_or_staff_read
  on public.staff_profiles
  for select
  to authenticated
  using (
    id = (select auth.uid())
    or (select private.is_staff())
  );

drop policy if exists staff_profiles_admin_write on public.staff_profiles;
create policy staff_profiles_admin_write
  on public.staff_profiles
  for all
  to authenticated
  using ((select private.is_admin()))
  with check ((select private.is_admin()));

drop policy if exists wallet_accounts_staff_read on public.wallet_accounts;
create policy wallet_accounts_staff_read
  on public.wallet_accounts
  for select
  to authenticated
  using ((select private.is_staff()));

drop policy if exists wallet_accounts_staff_write on public.wallet_accounts;
create policy wallet_accounts_staff_write
  on public.wallet_accounts
  for update
  to authenticated
  using ((select private.is_staff()))
  with check ((select private.is_staff()));

drop policy if exists kyc_profiles_staff_all on public.kyc_profiles;
create policy kyc_profiles_staff_all
  on public.kyc_profiles
  for all
  to authenticated
  using ((select private.is_staff()))
  with check ((select private.is_staff()));

drop policy if exists wallet_transactions_staff_read on public.wallet_transactions;
create policy wallet_transactions_staff_read
  on public.wallet_transactions
  for select
  to authenticated
  using ((select private.is_staff()));

drop policy if exists wallet_transactions_staff_insert on public.wallet_transactions;
create policy wallet_transactions_staff_insert
  on public.wallet_transactions
  for insert
  to authenticated
  with check ((select private.is_staff()));

drop policy if exists wallet_ledger_staff_read on public.wallet_ledger;
create policy wallet_ledger_staff_read
  on public.wallet_ledger
  for select
  to authenticated
  using ((select private.is_staff()));

drop policy if exists wallet_ledger_staff_insert on public.wallet_ledger;
create policy wallet_ledger_staff_insert
  on public.wallet_ledger
  for insert
  to authenticated
  with check ((select private.is_staff()));

drop policy if exists account_actions_staff_all on public.account_actions;
create policy account_actions_staff_all
  on public.account_actions
  for all
  to authenticated
  using ((select private.is_staff()))
  with check ((select private.is_staff()));

drop policy if exists admin_audit_log_staff_read on public.admin_audit_log;
create policy admin_audit_log_staff_read
  on public.admin_audit_log
  for select
  to authenticated
  using ((select private.is_staff()));

drop policy if exists admin_audit_log_staff_insert on public.admin_audit_log;
create policy admin_audit_log_staff_insert
  on public.admin_audit_log
  for insert
  to authenticated
  with check ((select private.is_staff()));

-- ---------------------------------------------------------------------------
-- Data API grants (tables are not auto-exposed)
-- ---------------------------------------------------------------------------

grant usage on schema public to anon, authenticated;
grant usage on schema private to authenticated;

grant select on table public.blog_posts to anon, authenticated;
grant insert, update, delete on table public.blog_posts to authenticated;

grant select on table public.site_content to anon, authenticated;
grant insert, update, delete on table public.site_content to authenticated;

grant select, insert, update, delete on table public.staff_profiles to authenticated;

revoke all on table public.wallet_accounts from anon;
revoke all on table public.kyc_profiles from anon;
revoke all on table public.wallet_transactions from anon;
revoke all on table public.wallet_ledger from anon;
revoke all on table public.account_actions from anon;
revoke all on table public.admin_audit_log from anon;

grant select, update on table public.wallet_accounts to authenticated;
grant select, insert, update, delete on table public.kyc_profiles to authenticated;
grant select, insert on table public.wallet_transactions to authenticated;
grant select, insert on table public.wallet_ledger to authenticated;
grant select, insert, update, delete on table public.account_actions to authenticated;
grant select, insert on table public.admin_audit_log to authenticated;

grant usage, select on all sequences in schema public to authenticated;

-- ---------------------------------------------------------------------------
-- Seed: site copy + investigation accounts (not auth users)
-- ---------------------------------------------------------------------------

insert into public.site_content (page, section, content)
values
  ('homepage', 'hero', '{"headline":"Every feature. One wallet.","subheadline":"Hold OpenUSD, send with QR, mine rewards, and accept payments with QR Pay.","cta_text":"Sign in with Pi","cta_link":"https://openpy.space/auth"}'::jsonb),
  ('homepage', 'trust', '{"line":"OUSD $1 peg · Live PI rates · KYC · Pi Browser · OpenPay Pro"}'::jsonb),
  ('blog', 'hero', '{"eyebrow":"Learn","title":"OpenPay blog","subtitle":"All the latest news, updates, and announcements from OpenPay."}'::jsonb),
  ('about', 'about_content', '{"title":"About OpenPay","content":"OpenPay is building stable payments for the Pi economy — wallet, merchant rails, and OpenUSD."}'::jsonb),
  ('footer', 'footer', '{"tagline":"Stable payments for the Pi economy.","support":"support@openpy.space"}'::jsonb)
on conflict (page, section) do nothing;

insert into public.wallet_accounts (
  id, username, account_no, email, display_name, status, risk, ousd_balance, pi_balance, flags, restriction_reason, last_active_at, created_at
) values
  ('11111111-1111-1111-1111-111111111111', 'alice', 'OP-1842-5501', 'alice@openpy.space', 'Alice Reyes', 'active', 'low', 248.50, 120.40000000, '{}', null, '2026-08-16 15:12:00+08', '2026-01-18 00:00:00+08'),
  ('22222222-2222-2222-2222-222222222222', 'juan', 'OP-2201-8834', 'juan@example.com', 'Juan Dela Cruz', 'active', 'high', 12.08, 4.20000000, '{velocity,abuse-review}', null, '2026-08-16 16:01:00+08', '2026-03-04 00:00:00+08'),
  ('33333333-3333-3333-3333-333333333333', 'openpaystore', 'OP-9011-0042', 'merchant@openpy.space', 'OpenPay Store', 'active', 'low', 1840.00, 0, '{merchant}', null, '2026-08-16 13:55:00+08', '2025-12-02 00:00:00+08'),
  ('44444444-4444-4444-4444-444444444444', 'mira', 'OP-3310-1199', 'mira@example.com', 'Mira Santos', 'active', 'medium', 4.00, 18.70000000, '{kyc-pending}', null, '2026-08-15 20:20:00+08', '2026-08-12 00:00:00+08'),
  ('55555555-5555-5555-5555-555555555555', 'riskcase', 'OP-7744-2208', 'risk@example.com', 'Leo Navarro', 'restricted', 'high', 610.22, 2.00000000, '{tos,phishing-reports}', 'Terms of service — reported phishing QR Pay links.', '2026-08-14 07:05:00+08', '2026-05-01 00:00:00+08'),
  ('66666666-6666-6666-6666-666666666666', 'northwind', 'OP-5566-0912', 'northwind@example.com', 'Northwind Labs', 'frozen', 'high', 90.00, 0, '{fraud-review}', 'Suspected fraud — funds frozen pending review.', '2026-08-10 14:44:00+08', '2026-07-22 00:00:00+08')
on conflict (id) do nothing;

insert into public.kyc_profiles (
  account_id, status, full_name, dob, nationality, id_type, id_number_masked, address, verified_at, notes
) values
  ('11111111-1111-1111-1111-111111111111', 'approved', 'Alice Marie Reyes', '1994-03-12', 'Philippines', 'Passport', 'P7•••4491', 'Makati, Metro Manila', '2026-02-02 00:00:00+08', null),
  ('22222222-2222-2222-2222-222222222222', 'approved', 'Juan Dela Cruz', '1990-11-02', 'Philippines', 'National ID', 'PH•••7721', 'Quezon City', '2026-03-09 00:00:00+08', 'Multiple failed bank sends in 24h.'),
  ('33333333-3333-3333-3333-333333333333', 'approved', 'OpenPay Store Inc.', null, 'Philippines', 'Business permit', 'BN•••1042', 'BGC, Taguig', '2025-12-12 00:00:00+08', null),
  ('44444444-4444-4444-4444-444444444444', 'pending', 'Mira Santos', '2001-07-19', 'Philippines', 'Driver license', 'N0•••3310', 'Cebu City', null, 'Selfie mismatch — waiting resubmit.'),
  ('55555555-5555-5555-5555-555555555555', 'approved', 'Leonardo Navarro', '1988-01-30', 'Philippines', 'Passport', 'P2•••2208', 'Davao City', '2026-05-06 00:00:00+08', null),
  ('66666666-6666-6666-6666-666666666666', 'rejected', 'Northwind Labs', null, 'Unknown', 'Utility bill', '—', 'Unverified', null, 'Document not authentic.')
on conflict (account_id) do nothing;

insert into public.wallet_transactions (account_id, occurred_at, tx_type, method, counterparty, amount, status, note)
select * from (
  values
    ('11111111-1111-1111-1111-111111111111'::uuid, '2026-08-16 15:12:00+08'::timestamptz, 'Receive', 'QR Pay', '@store', 18.00, 'Completed', null),
    ('11111111-1111-1111-1111-111111111111'::uuid, '2026-08-15 09:40:00+08'::timestamptz, 'Cash in', 'Apple Pay', 'Apple Pay', 50.00, 'Completed', null),
    ('11111111-1111-1111-1111-111111111111'::uuid, '2026-08-14 18:02:00+08'::timestamptz, 'Send', 'OpenPay', '@juan', -25.00, 'Completed', null),
    ('22222222-2222-2222-2222-222222222222'::uuid, '2026-08-16 16:01:00+08'::timestamptz, 'Send', 'Pi Wallet', 'GDSXE7…D4LJ', -10.00, 'Completed', 'cashout'),
    ('22222222-2222-2222-2222-222222222222'::uuid, '2026-08-16 15:40:00+08'::timestamptz, 'Send', 'Bank', 'GCash', -40.00, 'Failed', null),
    ('22222222-2222-2222-2222-222222222222'::uuid, '2026-08-16 14:11:00+08'::timestamptz, 'Send', 'Express Send', '@alice', -80.00, 'Completed', null),
    ('22222222-2222-2222-2222-222222222222'::uuid, '2026-08-15 23:22:00+08'::timestamptz, 'Cash in', 'Maya', 'Maya', 20.00, 'Completed', null),
    ('33333333-3333-3333-3333-333333333333'::uuid, '2026-08-16 13:55:00+08'::timestamptz, 'Receive', 'QR Pay', 'Checkout qrp_8f', 32.50, 'Completed', null),
    ('33333333-3333-3333-3333-333333333333'::uuid, '2026-08-16 11:02:00+08'::timestamptz, 'Receive', 'PayMongo Link', 'pm.link/…', 85.00, 'Completed', null),
    ('44444444-4444-4444-4444-444444444444'::uuid, '2026-08-15 20:20:00+08'::timestamptz, 'Mining', 'Engage Mining', 'OpenPay', 0.25, 'Completed', null),
    ('44444444-4444-4444-4444-444444444444'::uuid, '2026-08-12 16:10:00+08'::timestamptz, 'Welcome', 'KYC bonus', 'OpenPay', 0.00, 'Held', null),
    ('55555555-5555-5555-5555-555555555555'::uuid, '2026-08-14 07:05:00+08'::timestamptz, 'Send', 'QR Pay', 'unknown checkout', -95.00, 'Blocked', null),
    ('55555555-5555-5555-5555-555555555555'::uuid, '2026-08-13 21:18:00+08'::timestamptz, 'Receive', 'P2P', '@newuser', 400.00, 'Completed', null),
    ('66666666-6666-6666-6666-666666666666'::uuid, '2026-08-10 14:44:00+08'::timestamptz, 'Cash in', 'Card', 'Visa ••19', 90.00, 'Disputed', null)
) as seed (account_id, occurred_at, tx_type, method, counterparty, amount, status, note)
where not exists (select 1 from public.wallet_transactions);

insert into public.account_actions (account_id, action, reason, detail, actor_email, created_at)
select * from (
  values
    ('55555555-5555-5555-5555-555555555555'::uuid, 'restrict', 'Terms of service violation', 'Phishing reports — send blocked', 'admin@openpy.space', '2026-08-14 08:00:00+08'::timestamptz),
    ('66666666-6666-6666-6666-666666666666'::uuid, 'freeze', 'Suspected fraud', 'Chargeback risk', 'admin@openpy.space', '2026-08-11 10:12:00+08'::timestamptz)
) as seed (account_id, action, reason, detail, actor_email, created_at)
where not exists (select 1 from public.account_actions);

-- Attach a Supabase Auth user to staff after they exist:
--   insert into public.staff_profiles (id, email, role)
--   select id, email, 'admin' from auth.users where email = 'admin@openpy.space'
--   on conflict (id) do update set role = 'admin', is_active = true;
-- Also set Dashboard → Users → user → App metadata: { "role": "admin" }
