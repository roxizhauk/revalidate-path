import Link from "next/link";
import Form from "@/components/form";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}
        <hr />
        <Form />
        <hr />
        <p>
          <Link href={"/"} prefetch={false}>
            Back to the top
          </Link>
        </p>
      </body>
    </html>
  );
}
