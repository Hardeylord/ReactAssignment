import { Link } from "react-router-dom";
import { Loader2, LogOut } from "lucide-react";

function Header() {
  return (
    <div>
      <div className="w-full p-4 flex justify-between bg-black drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <p className="cursor-pointer text-white">
          <span className="text-3xl text-[#0081A3]">React.</span>js
        </p>
        <div className="hidden md:flex">
          <ul className="flex space-x-9 justify-between">
            <li className="text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="text-white">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="text-white">
              <Link to="/todolist">Todo-List</Link>
            </li>
            
            <li className="text-white">
              <Link to="/store">Store</Link>
            </li>
            {/* <li className="text-white">
              <Link to="/Store2">Store2</Link>
            </li> */}
          </ul>
        </div>
        <button className="p-2 flex space-x-2 rounded-xl text-white bg-[#0081A3] cursor-pointer">
        <LogOut />
          <Link to="/auth/login">Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Header;
