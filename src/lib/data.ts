import { getServiceClient } from "@/lib/supabase/server";
import type { Category, Product, Project, BrandPartner, Testimonial, Service } from "@/lib/supabase/types";

export async function getCategories(): Promise<Category[]> {
  const sb = getServiceClient();
  if (!sb) return [];
  const { data } = await sb
    .from("categories")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

interface CategoryWithProducts extends Category {
  products: Pick<Product, "name" | "image_url">[];
}

export async function getCategoriesWithProducts(): Promise<CategoryWithProducts[]> {
  const [categories, products] = await Promise.all([
    getCategories(),
    getAllProducts(),
  ]);

  return categories.map((cat) => ({
    ...cat,
    products: products
      .filter((p) => p.category_id === cat.id)
      .map((p) => ({ name: p.name, image_url: p.image_url })),
  }));
}

async function getAllProducts(): Promise<Product[]> {
  const sb = getServiceClient();
  if (!sb) return [];
  const { data } = await sb
    .from("products")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

export async function getProjects(): Promise<{
  completed: Project[];
  ongoing: Project[];
}> {
  const sb = getServiceClient();
  if (!sb) return { completed: [], ongoing: [] };
  const { data } = await sb
    .from("projects")
    .select("*")
    .order("sort_order");

  const all = data ?? [];
  return {
    completed: all.filter((p) => p.status === "completed"),
    ongoing: all.filter((p) => p.status === "ongoing"),
  };
}

export async function getBrandPartners(): Promise<BrandPartner[]> {
  const sb = getServiceClient();
  if (!sb) return [];
  const { data } = await sb
    .from("brand_partners")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const sb = getServiceClient();
  if (!sb) return [];
  const { data } = await sb
    .from("testimonials")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

export async function getServices(): Promise<Service[]> {
  const sb = getServiceClient();
  if (!sb) return [];
  const { data } = await sb
    .from("services")
    .select("*")
    .order("sort_order");
  return data ?? [];
}

export async function getCorporateContent(): Promise<Record<string, Record<string, unknown>>> {
  const sb = getServiceClient();
  if (!sb) return {};
  const { data } = await sb
    .from("corporate_content")
    .select("*");

  const result: Record<string, Record<string, unknown>> = {};
  for (const row of data ?? []) {
    result[row.id] = row.data as Record<string, unknown>;
  }
  return result;
}

export interface ContactInfo {
  address: string;
  address2: string;
  postal_code: string;
  phone: string;
  emails: string[];
  hours: string[];
  map_query: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  whatsapp: string;
}

const defaultContact: ContactInfo = {
  address: "Söğütözü Mah. Söğütözü Cd. No:2/A - 13",
  address2: "Koç Kuleleri - Çankaya / ANKARA",
  postal_code: "06510",
  phone: "+90 (532) 301 54 25",
  emails: ["info@yapitek.tr"],
  hours: ["Pazartesi - Cuma: 08:00 - 18:00", "Cumartesi: 09:00 - 15:00", "Pazar: Kapalı"],
  map_query: "Koç+Kuleleri,+Söğütözü+Mahallesi,+Söğütözü+Caddesi,+Çankaya,+Ankara",
};

const defaultSocial: SocialLinks = {
  facebook: "",
  instagram: "https://www.instagram.com/yapitekyapi",
  linkedin: "",
  whatsapp: "905321234567",
};

export async function getContactInfo(): Promise<ContactInfo> {
  const content = await getCorporateContent();
  return { ...defaultContact, ...(content.contact as Partial<ContactInfo> | undefined) };
}

export async function getSocialLinks(): Promise<SocialLinks> {
  const content = await getCorporateContent();
  return { ...defaultSocial, ...(content.social as Partial<SocialLinks> | undefined) };
}
