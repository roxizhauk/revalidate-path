import Link from "next/link";
import { getDate } from "@/lib";

// export const dynamic = "force-static";
export const generateStaticParams = () => [];

export default async function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <p>id: {id}</p>
      <p>{getDate()}</p>
      <p>
        <a href={`/api/revalidate-path?path=/blog/${id}`}>Revalidate with revalidatePath</a>
      </p>
      <p>
        <a href={`/api/revalidate?path=/blog/${id}`}>Revalidate with res.revalidate</a>
      </p>
      <hr />
      <p>
        <Link href={"/"}>To the top</Link>
      </p>
    </>
  );
}
