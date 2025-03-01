import { GiCartwheel } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { MdPhoneEnabled } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  return (
    <header>
      <div className=" border  border-gray-200">
        <div className="flex justify-between h-12 px-3  mx-auto max-w-7xl border border-t-0 border-b-0 border-x-gray-200 ">
          <div className="flex  gap-2 sm:border sm:border-t-0 sm:border-b-0 sm:border-l-0 sm:border-r-gray-200 ">
            <div className="flex gap-2 items-center sm:border sm:border-t-0 sm:border-b-0 sm:border-l-0 sm:border-r-gray-200 p-3 text-gray-500">
              <MdPhoneEnabled />
              <span className="hidden sm:inline-flex"> +1-541-754-3010</span>
            </div>
            <div className="flex items-center text-gray-500">
              <MdOutlineMail />
              <span className="hidden sm:inline-flex px-2">contact@gmail.com</span>
            </div>
          </div>
          <div className="flex">
            <input
              type="text"
              className="grow outline-none hidden sm:inline"
              placeholder="Search"
            />
            <Link to="/sign-in" className="grow p-4 sm:inline hidden">
              SignIn
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-40 ">
            <div className="flex flex-col relative pl-2 sm:pl-0">
              <img className="w-18 sm:w-23" src="autozone.png" alt="" />
              <span className="italic font-bold text-2xl absolute sm:top-19 top-13">AutoZone</span>
            </div>
            <ul className=" gap-10 text-lg sm:inline-flex hidden">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Platform</li>
              <li>
                <Link to={"/posts"}>Blogs</Link>
              </li>
              <li>
                <Link to={"/shop"}>Shop</Link>
              </li>
              <li>
                <Link to={"/favorites"}>Favorites</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About us</Link>
              </li>
            </ul>
          </div>
          <div className="flex pr-4 gap-5 items-center">
            <FaUser size={20} />
            <GiCartwheel size={20} />
            <div className="sm:hidden inline-flex gap-5">
              <MdFavorite size={20} />
              <IoMdSearch size={20} />
              <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="transition-all">
                <GiHamburgerMenu size={20} color="red" />
              </button>
            </div>
            <Link
              to="/shop"
              className="bg-[#FF2A02] text-white px-6 py-2 rounded-md font-semibold text-lg sm:inline hidden">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      {showMobileMenu && <MobileMenu />}
    </header>
  );
};

export default Header;
