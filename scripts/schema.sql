-- YapıTek Admin Panel - Supabase Schema
-- Bu SQL'i Supabase SQL Editor'da çalıştırın

-- Categories tablosu
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  icon_name TEXT NOT NULL DEFAULT 'Package',
  title TEXT NOT NULL,
  photo_url TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  brands JSONB NOT NULL DEFAULT '[]',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Products tablosu
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  image_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Projects tablosu
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  category_type TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  materials JSONB NOT NULL DEFAULT '[]',
  image_url TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'completed' CHECK (status IN ('completed', 'ongoing')),
  progress INTEGER NOT NULL DEFAULT 100 CHECK (progress >= 0 AND progress <= 100),
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);

-- RLS Politikaları
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- SELECT herkes için açık
CREATE POLICY "categories_select" ON categories FOR SELECT USING (true);
CREATE POLICY "products_select" ON products FOR SELECT USING (true);
CREATE POLICY "projects_select" ON projects FOR SELECT USING (true);

-- INSERT/UPDATE/DELETE sadece service_role için
CREATE POLICY "categories_insert" ON categories FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "categories_update" ON categories FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "categories_delete" ON categories FOR DELETE USING (auth.role() = 'service_role');

CREATE POLICY "products_insert" ON products FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "products_update" ON products FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "products_delete" ON products FOR DELETE USING (auth.role() = 'service_role');

CREATE POLICY "projects_insert" ON projects FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "projects_update" ON projects FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "projects_delete" ON projects FOR DELETE USING (auth.role() = 'service_role');

-- Brand Partners tablosu (Referanslar sayfası - Marka/İş Ortakları)
CREATE TABLE IF NOT EXISTS brand_partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Testimonials tablosu (Referanslar sayfası - Müşteri Yorumları)
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name TEXT NOT NULL,
  company TEXT NOT NULL DEFAULT '',
  text TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Corporate Content tablosu (Kurumsal/Hakkımızda sayfası - key-value)
CREATE TABLE IF NOT EXISTS corporate_content (
  id TEXT PRIMARY KEY,
  data JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Yeni indeksler
CREATE INDEX IF NOT EXISTS idx_brand_partners_sort ON brand_partners(sort_order);
CREATE INDEX IF NOT EXISTS idx_testimonials_sort ON testimonials(sort_order);

-- RLS Politikaları
ALTER TABLE brand_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE corporate_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "brand_partners_select" ON brand_partners FOR SELECT USING (true);
CREATE POLICY "brand_partners_insert" ON brand_partners FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "brand_partners_update" ON brand_partners FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "brand_partners_delete" ON brand_partners FOR DELETE USING (auth.role() = 'service_role');

CREATE POLICY "testimonials_select" ON testimonials FOR SELECT USING (true);
CREATE POLICY "testimonials_insert" ON testimonials FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "testimonials_update" ON testimonials FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "testimonials_delete" ON testimonials FOR DELETE USING (auth.role() = 'service_role');

CREATE POLICY "corporate_content_select" ON corporate_content FOR SELECT USING (true);
CREATE POLICY "corporate_content_insert" ON corporate_content FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "corporate_content_update" ON corporate_content FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "corporate_content_delete" ON corporate_content FOR DELETE USING (auth.role() = 'service_role');

-- Services tablosu (Hizmetler sayfası)
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image_url TEXT NOT NULL DEFAULT '',
  icon_name TEXT NOT NULL DEFAULT 'Package',
  features JSONB NOT NULL DEFAULT '[]',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_services_sort ON services(sort_order);

ALTER TABLE services ENABLE ROW LEVEL SECURITY;

CREATE POLICY "services_select" ON services FOR SELECT USING (true);
CREATE POLICY "services_insert" ON services FOR INSERT WITH CHECK (auth.role() = 'service_role');
CREATE POLICY "services_update" ON services FOR UPDATE USING (auth.role() = 'service_role');
CREATE POLICY "services_delete" ON services FOR DELETE USING (auth.role() = 'service_role');

-- Storage Bucket'ları (Supabase Dashboard'dan veya SQL ile)
-- Not: Storage bucket'larını Supabase Dashboard > Storage bölümünden oluşturun:
-- 1. "categories" bucket (public)
-- 2. "products" bucket (public)
-- 3. "projects" bucket (public)
-- 4. "corporate" bucket (public) - logo ve kurucu görselleri
