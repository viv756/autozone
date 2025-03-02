import React from "react";
import { Link } from "react-router-dom";

const BlogSearchSection = () => {
  return (
    <>
      <h2 className="text-2xl ">Search Blog</h2>
      <hr className="border-red-500" />
      <input
        type="text"
        placeholder="Search"
        className="outline-none p-3 border border-gray-200 rounded-md focus:border-gray-500"
      />
      <div className="mt-15 flex flex-col gap-6">
        <h2 className="text-2xl ">Categories:</h2>
        <hr className="border-red-500" />
        <ul className="flex flex-col gap-1 mt-3">
          <li>
            <Link to="/" className="text-gray-500 hover:text-[#FF2A02]">
              Auto Technology
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-500 hover:text-[#FF2A02]">
              Auto Technology
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-500 hover:text-[#FF2A02]">
              Auto Technology
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BlogSearchSection;
