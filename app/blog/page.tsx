import Datetime from "@/components/Datetime";

export default function Page() {
  const datetime = new Date().toISOString();
  return (
    <>
      <p>/blog</p>
      <Datetime datetime={datetime} />
      <p>
        <a href={`/api/revalidate-path?path=/blog`}>
          Revalidate with <code>revalidatePath</code>
        </a>
      </p>
      <p>
        <a href={`/api/revalidate?path=/blog`}>
          Revalidate with <code>res.revalidate</code>
        </a>
      </p>
    </>
  );
}
