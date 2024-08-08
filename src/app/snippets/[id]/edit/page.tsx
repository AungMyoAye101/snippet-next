import SnippetEditForm from "@/components/Snippet_Edit_Form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import * as action from "@/actions";

const SnippetEditPage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    notFound();
  }

  return (
    <div className="border border-base-100 p-4 rounded bg-gray-200 shadow">
      <SnippetEditForm snippets={snippet} />
    </div>
  );
};

export default SnippetEditPage;
