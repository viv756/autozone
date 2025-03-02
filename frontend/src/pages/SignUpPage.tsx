import { Link } from "react-router-dom";
import Title from "../components/Title";

const SignUpPage = () => {
  return (
    <div className="mt-4 min-h-screen p-2">
     <h1 className="text-5xl font-bold text-primary text-center">Register</h1>
      <form className="max-w-150 border-2 border-gray-300 rounded-lg mx-auto mt-10 p-7 flex flex-col gap-3 ">
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" className="p-2 w-full rounded-sm focus:outline-none  border border-gray-300 " placeholder="Enter your name" />
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" className="p-2 w-full rounded-sm focus:outline-none  border border-gray-300" placeholder="Enter your email" />
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" className="p-2 w-full  rounded-sm focus:outline-none border border-gray-300" placeholder="Enter your password" />
        <label htmlFor="re-password">Re-enter your password</label>
        <input type="password" required id="repassword" className="p-2 w-full  rounded-sm focus:outline-none border border-gray-300" placeholder="Enter the same password" />
        <button className="bg-primary rounded-sm h-10 text-white font-semibold text-xl ">Register</button>
        <div className="flex gap-1">
        <p>Already have an accound?</p>
        <Link to={"sign-in"} className="text-blue-600">SignIn</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
