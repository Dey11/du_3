import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" border-b-2 border-b-[#ff6d7f]">
      <nav className="p-2">
        <ul className="flex justify-start gap-10 place-items-center text-[#4e0316] ">
          <Link to={"/"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
              Dashboard
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
              About
            </li>
          </Link>
          <Link to={"/login"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
              Login
            </li>
          </Link>
          <Link to={"/register"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
              Register
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
