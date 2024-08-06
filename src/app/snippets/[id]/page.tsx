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
  return <div>{snippet.title}</div>;
};

export default SnippetShowPage;
