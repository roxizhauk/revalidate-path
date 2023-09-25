import Link from "next/link";
import { getDate } from "@/lib";

export default function Page() {
  return (
    <>
      <div>/blog</div>
      <div>{getDate()}</div>
      <hr />
      <p>
        <Link href={"/"}>To the top</Link>
      </p>
    </>
  );
}
