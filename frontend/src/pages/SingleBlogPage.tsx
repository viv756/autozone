import Title from "../components/Title";
import BlogSearchSection from "../components/BlogSearchSection";

const SingleBlogPage = () => {
  return (
    <div className="">
      <Title title="Choosing the Right Tires for Your Vehicle Required" />
      <div className="max-w-350 container mx-auto">
        <div className="flex gap-10 mt-10">
          <div className="max-w-230 ">
            <img src="blog1.jpg" alt="" />
          </div>
          <div className="flex-1 flex flex-col gap-6 px-2 sm:px-0">
            <BlogSearchSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
