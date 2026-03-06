export interface Category {
  id: string;
  icon_name: string;
  title: string;
  photo_url: string;
  description: string;
  brands: string[];
  sort_order: number;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  image_url: string | null;
  sort_order: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  category_type: string;
  description: string;
  materials: string[];
  image_url: string;
  images: string[];
  status: "completed" | "ongoing";
  progress: number;
  sort_order: number;
}

export interface BrandPartner {
  id: string;
  name: string;
  logo_url: string;
  category: string;
  sort_order: number;
}

export interface Testimonial {
  id: string;
  author_name: string;
  company: string;
  text: string;
  sort_order: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image_url: string;
  icon_name: string;
  features: string[];
  sort_order: number;
}

export interface CorporateContent {
  id: string;
  data: Record<string, unknown>;
  updated_at: string;
}
