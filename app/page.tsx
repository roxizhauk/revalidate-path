import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        statically generated with <code>generateStaticParams</code>
      </div>
      <ul>
        <li>
          <Link href={"/blog/static1"}>
            Go to <code>/blog/static1</code> through <code>&lt;Link&gt;</code>
          </Link>
        </li>
        <li>
          <Link href={"/blog/static2"}>
            Go to <code>/blog/static2</code> through <code>&lt;Link&gt;</code>
          </Link>
        </li>
      </ul>
      <div>dynamically generated at request time</div>
      <ul>
        <li>
          <Link href={"/blog/dynamic1"}>
            Go to <code>/blog/dynamic1</code> through <code>&lt;Link&gt;</code>
          </Link>
        </li>
        <li>
          <Link href={"/blog/dynamic2"}>
            Go to <code>/blog/dynamic2</code> through <code>&lt;Link&gt;</code>
          </Link>
        </li>
        <li>
          <Link href={"/blog/dynamic3"}>
            Go to <code>/blog/dynamic3</code> through <code>&lt;Link&gt;</code>
          </Link>
        </li>
      </ul>
      <div>dynamically generated at request time</div>
      <ul>
        <li>
          <a href={"/blog/dynamic4"}>
            Go to <code>/blog/dynamic4</code> through <code>&lt;a&gt;</code>
          </a>
        </li>
        <li>
          <a href={"/blog/dynamic5"}>
            Go to <code>/blog/dynamic5</code> through <code>&lt;a&gt;</code>
          </a>
        </li>
        <li>
          <a href={"/blog/dynamic6"}>
            Go to <code>/blog/dynamic6</code> through <code>&lt;a&gt;</code>
          </a>
        </li>
      </ul>
      <div>
        <Link href={"/blog"}>
          Go to <code>/blog</code> (static page)
        </Link>
      </div>
    </>
  );
}
