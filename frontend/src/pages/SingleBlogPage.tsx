import Title from "../components/Title";
import BlogSearchSection from "../components/BlogSearchSection";
import { FaRegUserCircle } from "react-icons/fa";
import { TbPinFilled } from "react-icons/tb";
import { MdOutlineCalendarMonth } from "react-icons/md";

const SingleBlogPage = () => {
  return (
    <div className="">
      <Title title="Choosing the Right Tires for Your Vehicle Required" />
      <div className="max-w-350 container mx-auto">
        <div className="flex sm:flex-row flex-col gap-10 mt-10">
          <div className="max-w-230 p-4">
            <img src="blog1.jpg" alt="" />
            <div className="flex gap-6 mt-7">
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
            <hr className="border-t-2 border-dashed border-gray-300 my-9" />

            <p>
              In a world where innovation knows no bounds, the automotive industry has undergone a
              remarkable transformation in recent years. Electric vehicles (EVs) have emerged as the
              future of transportation, and one fictitious company, Quantum Motors, is taking the
              industry by storm with its latest creation: the Quantum Cruiser.
              <p>
                The Quantum Cruiser represents a bold step into the future of electric vehicles,
                pushing the boundaries of what we thought was possible. This cutting-edge EV is not
                your run-of-the-mill electric car; it’s a technological marvel that offers a glimpse
                into a world of sustainable, efficient, and thrilling transportation.
              </p>
              <p>
                At the heart of the Quantum Cruiser is its revolutionary Quantum Powertrain. This
                electric propulsion system combines the power of quantum batteries and advanced
                supercapacitors to deliver unrivaled performance. With a near-instantaneous 0 to 60
                mph time of just 2.5 seconds, this EV offers a thrilling driving experience that
                rivals even the most exotic sports cars.
              </p>
            </p>
            <hr className="border-t-2 border-dashed border-gray-300 my-9" />
            {/* comment section */}

            <h2 className="text-4xl text-gray-900 font-semibold">Leave a comment</h2>
            <form action="" className="">
              <div className="flex flex-col gap-5 mt-5">
                <textarea
                  id="message"
                  className="block p-2.5 w-full text-md text-gray-900  rounded-lg border border-gray-300 focus:border-solid h-30"
                  placeholder="Write your thoughts here..."></textarea>
                <div className="flex justify-between gap-5 flex-wrap sm:gap-15">
                  <input
                    type="text"
                    className="p-4 text-gray-900 border border-gray-300 rounded-lg text-base grow"
                  />
                  <input
                    type="text"
                    className="  p-4 text-gray-900 border border-gray-300 rounded-lg text-base grow"
                  />
                  <input
                    type="text"
                    className="  p-4 text-gray-900 border border-gray-300 rounded-lg text-base grow "
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-primary text-white p-4 w-35  mt-4 rounded-md">
                  Post comment
                </button>
              </div>
            </form>
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
