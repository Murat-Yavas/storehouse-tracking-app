import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
