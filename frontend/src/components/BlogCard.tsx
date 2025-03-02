import { FaRegUserCircle } from "react-icons/fa";
import { TbPinFilled } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="max-w-230 sm:h-218 h-190  sm:px-0 rounded-sm shadow-xl shadow-gray-200">
      <img src="blog1.jpg" alt="Blog Featured Image" className="mb-8" />
      <div className="prose max-w-none px-7">
        <h1 className="text-3xl text-[#222222] font-semibold">
          Understanding Car Insurance: What You Need to Know
        </h1>
        <div className="flex gap-6 mt-4">
          <p className="text-gray-500 flex items-center gap-2">
            <FaRegUserCircle /> sanjay meils
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <TbPinFilled /> sanjay meils
          </p>
          <p className="text-gray-500 flex items-center gap-2">
            <MdOutlineCalendarMonth /> sanjay meils
          </p>
        </div>
        <p className="mt-9">
          In a world where innovation knows no bounds, the automotive industry has undergone a
          remarkable transformation in recent years. Electric vehicles (EVs) have emerged as the
          future of transportation, and one fictitious company, Quantum Motors, is taking the
          industry by storm with its latest creation: the Quantum Cruiser. The Quantum Cruiser
          represents a bold step […]
        </p>

        <button className="mt-9">
          <Link
            to={"/"}
            className="bg-[#FF2A02] text-white px-6 py-2 rounded-sm font-semibold text-lg">
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
