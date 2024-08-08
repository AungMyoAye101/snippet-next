"use client";
import React from "react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
const page = () => {
  const [formState, action] = useFormState(actions.createSnippet, {
    message: "",
  });
  return (
    <form
      action={action}
      className="flex flex-col  p-6 rounded mt-20 gap-4 shadow bg-gray-200"
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
      <div>{formState.message}</div>
      <button type="submit" className="rounded shadow py-2 bg-blue-300">
        create
      </button>
    </form>
  );
};

export default page;
