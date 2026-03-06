import { getServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const sb = getServiceClient();
  if (!sb) return NextResponse.json([]);
  const { data, error } = await sb
    .from("projects")
    .select("*")
    .order("sort_order");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  const images = body.images || [];
  const { error } = await sb.from("projects").insert({
    title: body.title,
    location: body.location,
    category_type: body.category_type,
    description: body.description,
    materials: body.materials,
    image_url: images[0] || "",
    images,
    status: body.status,
    progress: body.progress ?? (body.status === "completed" ? 100 : 0),
    sort_order: body.sort_order ?? 0,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/projelerimiz");
  return NextResponse.json({ success: true });
}
