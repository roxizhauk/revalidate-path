"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { updateRoute } from "./actions";

export default function Form() {
  const [result, setResult] = useState<React.ReactNode>();
  const formRef = useRef<HTMLFormElement>(null);

  const handleFromAction = async (formData: FormData) => {
    const path = formData.get("path") as string | null;
    if (path) {
      await updateRoute(path);
      setResult(
        <div>
          <div>
            You successfully did <code>revalidatePath</code>!
          </div>
          <Link
            href={path}
            onClick={() => {
              formRef.current?.reset();
              setResult(undefined);
            }}
          >
            Go to <code>{path}</code>
          </Link>
        </div>
      );
    } else {
      setResult(<div>Please input path.</div>);
    }
  };

  return (
    <>
      <div>You can also use Server Action to revalidate here.</div>
      <form ref={formRef}>
        <input type="text" name="path" required placeholder="ex) /blog/dynamic1" />
        <button type="submit" formAction={handleFromAction}>
          Update Route
        </button>
      </form>
      {result && result}
    </>
  );
}
