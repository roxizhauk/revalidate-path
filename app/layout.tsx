import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <p>
          <Link href={"/"} prefetch={false}>
            Back to the top
          </Link>
        </p>
      </body>
    </html>
  );
}
