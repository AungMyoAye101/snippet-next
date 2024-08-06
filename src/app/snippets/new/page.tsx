import { db } from "@/db";
import React from "react";

const page = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
  };

  return (
    <form
      action=""
      className="flex flex-col max-w-96 mx-auto p-6 rounded mt-20 gap-4 shadow bg-gray-200"
    >
      <div className="flex flex-col ">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a title..."
          className="border p-2 rounded focus:outline-green-400"
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="code">Code</label>
        <textarea
          name="code"
          id="code"
          placeholder="Enter code..."
          className="border p-2 rounded focus:outline-green-400"
        />
      </div>
      <button type="submit" className="rounded shadow py-2 bg-blue-300">
        Submit
      </button>
    </form>
  );
};

export default page;
