import React from "react";
import "./Main.scss";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Popup from "../../components/Popup/Popup";
const Main = () => {
  return (
    <>
      <div className="mainpage">
        <div className="mainpage-topbar">
          <Topbar />
        </div>
        <div className="mainpage-container">
          <div className="mainpage-container-sidebar">
            <Sidebar />
          </div>
          <div className="mainpage-container-popup">
            <Popup />
          </div>

          <div className="mainpage-container-form"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
