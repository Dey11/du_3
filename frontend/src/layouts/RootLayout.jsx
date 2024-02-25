import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#ff6d7f]  to-[#ffa1ab] text-[#8c0f33] font-semibold text-lg ">
      <div className="max-w-[1300px] mx-auto">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
