import Datetime from "@/components/Datetime";
import Form from "@/components/form";

// export const dynamic = "force-static";
export const generateStaticParams = () => [{ id: "static1" }, { id: "static2" }];

export default async function Page({ params: { id } }: { params: { id: string } }) {
  const datetime = new Date().toISOString();
  return (
    <>
      <p>id: {id}</p>
      <Datetime datetime={datetime} />
      <p>
        <a href={`/api/revalidate-path?path=/blog/${id}`}>
          Revalidate with <code>revalidatePath</code>
        </a>
      </p>
      <p>
        <a href={`/api/revalidate?path=/blog/${id}`}>
          Revalidate with <code>res.revalidate</code>
        </a>
      </p>
      <Form path={`/blog/${id}`} />
    </>
  );
}
