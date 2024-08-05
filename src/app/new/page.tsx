import React from "react";

const page = () => {
  return (
    <form
      action="#"
      className="flex flex-col max-w-80 mx-auto p-6 rounded mt-20 gap-4 shadow bg-gray-200"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter a title..."
          className="border p-2 rounded focus:outline-green-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="code">Code</label>
        <textarea
          name="code"
          id="code"
          placeholder="Enter snippets..."
          className="border p-2 rounded focus:outline-green-400"
        />
      </div>
      <button className="rounded shadow py-2 bg-blue-300">Submit</button>
    </form>
  );
};

export default page;
