import { db } from "@/db";
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
    <div>
      <h1>{snippet.title} </h1>
      <pre className="p-3 border border-gray-200 bg-zinc-100 rounded">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;
