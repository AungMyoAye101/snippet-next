import SnippetEditForm from "@/components/Snippet_Edit_Form";
import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";

const SnippetEditPage = async ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <SnippetEditForm snippets={snippet} />
    </div>
  );
};

export default SnippetEditPage;
