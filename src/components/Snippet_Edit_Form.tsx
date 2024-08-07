"use client";
import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
interface SnippetProp {
  snippets: Snippet;
}

const SnippetEditForm = ({ snippets }: SnippetProp) => {
  const [code, setCode] = useState(snippets.code);
  const onChangeHandeler = (value: string = "") => {
    setCode(value);
  };
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
    </div>
  );
};

export default SnippetEditForm;
