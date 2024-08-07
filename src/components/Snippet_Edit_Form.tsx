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
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippets.code}
        options={{ minimap: { enabled: false } }}
        onChange={onChangeHandeler}
      />
      <form action={editSnippetAction}>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
