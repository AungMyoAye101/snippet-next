"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: {
      id,
    },
    data: {
      code,
    },
  });
  redirect(`/snippets/${id}`);
};

// delete snippet
export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
};
