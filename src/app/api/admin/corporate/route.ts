import { getServiceClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({});
  const { data, error } = await sb
    .from("corporate_content")
    .select("*");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // key-value olarak dönüştür: { about: {...}, mission: {...}, ... }
  const result: Record<string, unknown> = {};
  for (const row of data ?? []) {
    result[row.id] = row.data;
  }
  return NextResponse.json(result);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const sb = getServiceClient();
  if (!sb) return NextResponse.json({ error: "DB not configured" }, { status: 500 });

  // body: { about: {...}, mission: {...}, ... }
  const entries = Object.entries(body);
  for (const [key, data] of entries) {
    const { error } = await sb
      .from("corporate_content")
      .upsert({
        id: key,
        data: data as Record<string, unknown>,
        updated_at: new Date().toISOString(),
      });

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  revalidatePath("/hakkimizda");
  revalidatePath("/iletisim");
  revalidatePath("/referanslar");
  revalidatePath("/");
  return NextResponse.json({ success: true });
}
