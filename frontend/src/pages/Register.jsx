import React from "react";
import { useState, useContext } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        {
          username,
          password,
          state,
        },
        { useCredentails: true }
      );

      if (response.status === 200) {
        console.log("User registered");
      }

      setUsername("");
      setPassword("");
      setState("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-full">
      <h1 className="text-4xl pt-10 mx-auto text-center">Register</h1>
      <div className="">
        <form
          className="border-2 border-[#ea294f] max-w-fit text-2xl mt-16 p-10 px-24 mx-auto 
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
          <p>State</p>
          <input
            className="rounded-md  mx-1 px-1 sm:text-2xl text-lg"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
          <button className="block mx-auto bg-[#fa3956] text-lg rounded-md py-1 px-4">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
