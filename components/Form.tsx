"use client";

import Link from "next/link";
import { useState } from "react";
import { updateRoute } from "@/lib/actions";

export default function Form() {
  const [result, setResult] = useState<React.ReactNode>();

  const handleFromAction = async (formData: FormData) => {
    const path = formData.get("path") as string | null;
    if (path) {
      const completPath = path.startsWith("/") ? path : "/" + path;
      updateRoute(completPath);
      setResult(
        <div>
          <div>
            You successfully did <code>revalidatePath</code>!
          </div>
          <Link href={completPath}>
            Go to <code>completPath</code>
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
      <form>
        <input type="text" name="path" required placeholder="Input path to update" />
        <button type="submit" formAction={handleFromAction}>
          Update Route
        </button>
      </form>
      {result}
    </>
  );
}
