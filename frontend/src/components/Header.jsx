import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" border-b-2 border-b-[#ff6d7f]">
      <nav className="p-2">
        <ul className="flex justify-start gap-10 place-items-center text-[#4e0316] ">
          <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
            <Link to={"/"}> Dashboard </Link>
          </li>
          <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
            <Link to={"/about"}> About</Link>
          </li>
          <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
            <Link to={"/login"}> Login</Link>
          </li>
          <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
            <Link to={"/register"}> Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
