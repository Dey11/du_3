import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const dataFetch = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:3000/auth/validate", {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          setUser(res.data);
          console.log(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  const username = user.username;

  return (
    <div className=" border-b-2 border-b-[#ffa1ab]">
      <nav className="py-3">
        <ul className="flex justify-start gap-10 place-items-center text-[#4e0316] ">
          <Link to={"/"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab] ">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
              About
            </li>
          </Link>
          {!username && (
            <Link to={"/login"}>
              <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
                Login
              </li>
            </Link>
          )}
          {username && (
            <Link to={"/"}>
              <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
                Logout
              </li>
            </Link>
          )}
          {!username && (
            <Link to={"/register"}>
              <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
                Register
              </li>
            </Link>
          )}
          {username && (
            <Link to={"/"}>
              <li className="px-2 rounded-sm bg-[#ff6d7f] hover:bg-[#ffa1ab]">
                Dashboard
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
