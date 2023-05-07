import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

type Param = { params: { id: string } };

export async function GET(req: Request, { params: { id } }: Param) {
  try {
    revalidatePath(id ? `/blog/${id}` : "/");
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ message: "Error revalidatin" });
  }
}
