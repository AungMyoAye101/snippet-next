import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => (
    <div
      key={snippet.id}
      className="flex justify-between items-center rounded border border-gray-200 px-4 py-2 hover:bg-green-300"
    >
      <h1 className="text-md font-semibold font-serif">{snippet.title}</h1>
      <Link
        href={`/snippets/${snippet.id}`}
        className="py-2 px-4 border border-gray-300 rounded text-sm text-white bg-blue-500 hover:bg-blue-600"
      >
        view
      </Link>
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

      <div className="flex flex-col gap-2  ">{renderSnippets}</div>
    </div>
  );
}
