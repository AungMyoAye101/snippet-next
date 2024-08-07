import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <Link href={`/snippets/${snippet.id}`}>{snippet.title}</Link>
    </div>
  ));
  return (
    <div className="p-6 space-y-4 border border-base-200 rounded">
      <div className="flex justify-between px-4 py-2  items-center border border-base-200 rounded shadow text-sm ">
        <h1 className="text-lg font-semibold">Snippet</h1>
        <Link
          href={"/snippets/new"}
          className="border border-gray-300 rounded py-2 px-4 bg-sky-300"
        >
          New
        </Link>
      </div>

      <div className="flex flex-col gap-2  px-4 py-6 rounded-md shadow border ">
        {renderSnippets}
      </div>
    </div>
  );
}
