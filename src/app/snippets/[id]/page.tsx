import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const SnippetShowPage = async ({ params }: { params: { id: string } }) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });
  if (!snippet) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-2 px-6 py-10 rounded-md shadow border ">
      <h1 className="text-lg font-bold ">{snippet.title} </h1>
      <div className="space-x-2 self-end">
        <Link
          href={`/snippets/${snippet.id}/edit`}
          className="px-4 py-2 rounded shadow text-sm hover:scale-95 transition-transform ease-out border hover:border-green-300"
        >
          Edit
        </Link>
        <button className="px-4 py-2 rounded shadow text-sm hover:scale-95 transition-transform ease-out border hover:border-green-300">
          Delete
        </button>
      </div>
      <pre className="p-3 border border-gray-200 bg-zinc-100 rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
