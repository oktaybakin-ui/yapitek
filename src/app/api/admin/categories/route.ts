import { getServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const sb = getServiceClient();
  if (!sb) return NextResponse.json([]);
  const { data, error } = await sb
    .from("categories")
    .select("*")
    .order("sort_order");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  const { error } = await sb.from("categories").insert({
    id: body.id,
    icon_name: body.icon_name,
    title: body.title,
    photo_url: body.photo_url,
    description: body.description,
    brands: body.brands,
    sort_order: body.sort_order ?? 0,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/");
  revalidatePath("/urunler");
  return NextResponse.json({ success: true });
}
