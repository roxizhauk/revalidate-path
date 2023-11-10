"use client";

import { useState, useRef } from "react";
import { updateRoute } from "@/lib/actions";
import { redirect } from "next/navigation";

export default function Form() {
  const [error, setError] = useState<React.ReactNode>();
  const formRef = useRef<HTMLFormElement>(null);

  const handleFromAction = async (formData: FormData) => {
    const path = formData.get("path") as string | null;
    if (path) {
      const completePath = "/blog/" + path;
      const result = await updateRoute(completePath);
      // setResult(
      //   <div>
      //     <div>
      //       You successfully did <code>revalidatePath</code>!
      //     </div>
      //     <Link href={path}>
      //       Go to <code>{path}</code>
      //     </Link>
      //   </div>
      // );
      if (result) {
        formRef.current?.reset();
        redirect(completePath);
      } else {
        setError(<div>Something wrong.</div>);
      }
    } else {
      setError(<div>Please input path.</div>);
    }
  };

  return (
    <>
      <div>You can also use Server Action to revalidate here.</div>
      <form ref={formRef}>
        /blog/
        <input type="text" name="path" required placeholder="ex) dynamic1" />
        <button type="submit" formAction={handleFromAction}>
          Update Route
        </button>
      </form>
      {error}
    </>
  );
}
