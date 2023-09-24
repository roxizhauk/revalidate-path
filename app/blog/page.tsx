import { getDate } from "@/lib";

export default function Page() {
  return (
    <>
      <div>/blog</div>
      <div>{getDate()}</div>
    </>
  );
}
