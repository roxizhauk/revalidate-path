import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <p>
          <Link href={"/"}>Back to top</Link>
        </p>
      </body>
    </html>
  );
}
