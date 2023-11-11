"use client";

import { updateRoute } from "./actions";

export default function Form({ path }: { path: string }) {
  const handleFromAction = async () => {
    await updateRoute(path);
  };

  return (
    <>
      <div>You can also use Server Action to revalidate here.</div>
      <form action={handleFromAction}>
        <button>
          Update <code>{path}</code>
        </button>
      </form>
    </>
  );
}
