import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((snippet) => (
    <div key={snippet.id}>
      <Link href={`/snippets/${snippet.id}`}>{snippet.title}</Link>
    </div>
  ));
  return <div>{renderSnippets}</div>;
}
