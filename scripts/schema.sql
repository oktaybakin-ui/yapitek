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

-- Storage Bucket'ları (Supabase Dashboard'dan veya SQL ile)
-- Not: Storage bucket'larını Supabase Dashboard > Storage bölümünden oluşturun:
-- 1. "categories" bucket (public)
-- 2. "products" bucket (public)
-- 3. "projects" bucket (public)
