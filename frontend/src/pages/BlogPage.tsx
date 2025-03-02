import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Title from "../components/Title";

const BlogPage = () => {
  return (
    <div className="mt-4">
      <Title title="Blogs" breadcrumbs={["Home", "Blog"]} />
      <div className="flex flex-col">
        <div className="bg-white py-8">
          <div className="container max-w-350  mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex flex-col">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            </div>
            <div className="flex-1  sm:order-none  flex flex-col gap-6 px-2 sm:px-0">
              <h2 className="text-2xl ">Search Blog</h2>
              <hr className="border-red-500" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none p-3 border border-gray-200 rounded-md focus:border-gray-700"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
