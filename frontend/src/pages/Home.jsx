import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const username = user?.username;

  return (
    <div className=" ">
      <h1 className="mt-10 text-4xl mb-5">Welcome to Help.</h1>
      <p className="text-2xl">This is the admin panel of Help.</p>

      {!username && (
        <p className="mt-2 text-xl">Please login or register to continue</p>
      )}
      {username && (
        <p className="mt-5">
          Go to the{" "}
          <Link
            className="border-2 px-2 ml-1 bg-[#ffa1ab] rounded-md"
            to={"/dashboard"}
          >
            Dashboard
          </Link>
        </p>
      )}
    </div>
  );
};

export default Home;
