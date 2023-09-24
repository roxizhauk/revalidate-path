import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>
        <Link href={"/blog/test"}>Go to /blog/test with &lt;Link&gt;</Link>
      </p>
      <p>
        <Link href={"/blog/test2"}>Go to /blog/test2 with &lt;Link&gt;</Link>
      </p>
      <p>
        <Link href={"/blog/test3"}>Go to /blog/test3 with &lt;Link&gt;</Link>
      </p>
      <hr></hr>
      <p>
        <a href={"/blog/test4"}>Go to /blog/test4 with &lt;a&gt;</a>
      </p>
      <p>
        <a href={"/blog/test5"}>Go to /blog/test5 with &lt;a&gt;</a>
      </p>
      <p>
        <a href={"/blog/test6"}>Go to /blog/test6 with &lt;a&gt;</a>
      </p>
      <hr></hr>
      <p>
        <Link href={"/blog"}>Go to /blog (static page)</Link>
      </p>
    </>
  );
}
