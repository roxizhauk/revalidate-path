import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";
  try {
    revalidatePath(path);
    return NextResponse.json({ path, revalidated: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error revalidation", path });
  }
}
