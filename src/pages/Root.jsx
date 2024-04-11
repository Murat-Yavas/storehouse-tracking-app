import React from "react";
import MainNavigation from "../components/MainNavigation/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default Root;
