import Link from "next/link";
import { getDate } from "@/lib";

export default function Page() {
  return (
    <>
      <p>/blog</p>
      <p>{getDate()}</p>
      <p>
        <a href={`/api/revalidate-path?path=/blog`}>
          Revalidate with <code>revalidatePath</code>
        </a>
      </p>
      <p>
        <a href={`/api/revalidate?path=/blog`}>
          Revalidate with <code>res.revalidate</code>
        </a>
      </p>
      <hr />
      <p>
        <Link href={"/"}>To the top</Link>
      </p>
    </>
  );
}
