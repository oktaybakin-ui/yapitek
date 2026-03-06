import { getServiceClient } from "@/lib/supabase/server";
import type { Category, Product, Project } from "@/lib/supabase/types";

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
