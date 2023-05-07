import { getDate } from "@/lib";

export const dynamic = "force-static",
  generateStaticParams = () => [];

export default async function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <div>{id}</div>
      <div>{getDate()}</div>
    </>
  );
}
