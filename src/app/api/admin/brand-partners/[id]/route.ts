import { getServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  const { error } = await sb
    .from("brand_partners")
    .update({
      name: body.name,
      logo_url: body.logo_url,
      category: body.category,
      sort_order: body.sort_order,
    })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/referanslar");
  return NextResponse.json({ success: true });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  const { error } = await sb.from("brand_partners").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  revalidatePath("/referanslar");
  return NextResponse.json({ success: true });
}
