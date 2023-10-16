import React, { useState, useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import { Outlet, useLocation } from "react-router-dom";
import DashHeader from "../../headers/DashHeader";

function LayoutAdminDashboard() {
  return (
    <>
      <div className=" bg-off-white">
        <div>
          <DashHeader/>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <SideBar />
          </div>
          <div className="w-full mx-6 mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutAdminDashboard;
