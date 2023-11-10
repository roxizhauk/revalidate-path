"use client";

export default function Datetime({ datetime }: { datetime: string }) {
  return <div>Rendered at {new Date(datetime).toLocaleString("ja-JP")}</div>;
}
