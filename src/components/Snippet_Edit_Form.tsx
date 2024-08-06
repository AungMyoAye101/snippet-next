"use client";
import type { Snippet } from "@prisma/client";
interface SnippetProp {
  snippets: Snippet;
}

const SnippetEditForm = ({ snippets }: SnippetProp) => {
  return <div>{snippets.title}</div>;
};

export default SnippetEditForm;
