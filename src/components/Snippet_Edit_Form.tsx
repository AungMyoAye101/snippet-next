"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions";
interface SnippetProp {
  snippets: Snippet;
}

const SnippetEditForm = ({ snippets }: SnippetProp) => {
  const [code, setCode] = useState(snippets.code);
  const onChangeHandeler = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippets.id, code);
  return (
    <div className="space-y-2 ">
      <h1 className="text-lg font-semibold">Edit the code </h1>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippets.code}
        options={{ minimap: { enabled: false } }}
        onChange={onChangeHandeler}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="py-2  rounded border border-base-200 shadow w-full transition-colors ease-in-out duration-150 bg-sky-300 hover:bg-blue-500 hover:text-slate-50"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
