const MobileMenu = () => {
  return (
    <div className="origin-top duration-600 scale-y-100 transform   ">
      <ul className="text-lg flex flex-col gap-4 mt-6 ">
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">Home</li>
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">Platform</li>
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">News</li>
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">Shop</li>
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">Favorites</li>
        <li className="border border-t-0 border-l-0 border-b-gray-200 pl-2">About us</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
