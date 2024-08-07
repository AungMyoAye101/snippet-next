import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import * as actions from "@/actions";
const SnippetShowPage = async ({ params }: { params: { id: string } }) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });
  if (!snippet) {
    notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);
  return (
    <div className="flex flex-col gap-2 px-6 py-10 rounded-md shadow border ">
      <h1 className="text-lg font-bold ">{snippet.title} </h1>
      <div className="self-end flex gap-2">
        <Link
          href={`/snippets/${snippet.id}/edit`}
          className="px-4 py-2 rounded shadow text-sm hover:scale-95 transition-all ease-out border border-blue-400 hover:bg-blue-400"
        >
          Edit
        </Link>
        <form action={deleteSnippetAction}>
          <button className="px-4 py-2 rounded shadow text-sm hover:scale-95 transition-all ease-out border border-red-600 hover:bg-red-500">
            Delete
          </button>
        </form>
      </div>
      <pre className="p-3 border border-gray-200 bg-zinc-100 rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
