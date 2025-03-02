import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Title from "../components/Title";
import BlogSearchSection from "../components/BlogSearchSection";

const BlogPage = () => {
  return (
    <div className="">
      <Title title="Blogs" breadcrumbs={["Home", "Blog"]} />
      <div className="flex flex-col">
        <div className="bg-white py-8">
          <div className="container max-w-350  mx-auto flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-10 p-4">
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
            <div className="flex-1 flex flex-col gap-6 px-2 sm:px-0">
              <BlogSearchSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
