import { getServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const sb = getServiceClient();
  if (!sb) return NextResponse.json([]);
  const { data, error } = await sb
    .from("products")
    .select("*")
    .order("sort_order");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  const { error } = await sb.from("products").insert({
    category_id: body.category_id,
    name: body.name,
    image_url: body.image_url || null,
    sort_order: body.sort_order ?? 0,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/urunler");
  return NextResponse.json({ success: true });
}
