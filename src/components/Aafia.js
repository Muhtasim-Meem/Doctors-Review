import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const HealthPulse = () => {
  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
    </div>
  );
};

export default HealthPulse;
