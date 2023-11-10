import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const path = searchParams.get("path") || "/";
  revalidatePath(path);
  return NextResponse.json({
    revalidated: true,
    path,
    datetime: new Date().toLocaleString(),
  });
}
