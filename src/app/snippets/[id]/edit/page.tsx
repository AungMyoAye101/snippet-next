import React from "react";

const SnippetEditPage = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id);
  return <div>SnippetEditPage</div>;
};

export default SnippetEditPage;
