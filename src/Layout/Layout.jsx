import React from "react";
import Topbar from "../components/Topbar/Topbar";
// import Sidebar from "../components/SideMenu/Sidebar";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <div className="layout-navbar">
          <Topbar />
        </div>
        <div className="layout-container">
          {/* <div className="layout-container-left">
            <Sidebar/>
          </div> */}
          <div className="layout-container-right">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
