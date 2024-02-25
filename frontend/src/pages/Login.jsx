import React from "react";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        {
          username,
          password,
        },
        { useCredentails: true }
      );

      if (response.status === 200) {
        setUser({
          username: response.data.username,
          state: response.data.state,
        });
        setRedirect(true);
        const token = response.data.token;
        localStorage.setItem("token", token);
      }

      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <div className=" h-full">
      <div className="">
        <form
          className="border-2 border-[#ea294f] max-w-fit text-2xl mt-28 p-10 px-24 mx-auto 
        text-center space-y-5 rounded-lg bg-[#ffa1ab] shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p>Username</p>
          <input
            className="rounded-md mx-1 px-1 sm:text-2xl text-lg"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <p>Password</p>
          <input
            className="rounded-md  mx-1 px-1 sm:text-2xl text-lg"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="block mx-auto bg-[#fa3956] text-lg rounded-md py-1 px-4">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
