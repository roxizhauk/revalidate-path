import Link from "next/link";
import Form from "@/components/Form";

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
          <Link href={"/"}>Back to the top</Link>
        </p>
      </body>
    </html>
  );
}
