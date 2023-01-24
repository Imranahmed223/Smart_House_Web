import React, { useState, useEffect, useRef } from "react";
import "./Topbar.scss";
import logo from "../../assets/Topbar/logo.svg";
import arrow from "../../assets/Topbar/arrow.svg";
import profile from "../../assets/Topbar/profile.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

import Sidebar from "../Sidebar/Sidebar";
const Topbar = () => {
  const navigate = useNavigate('')
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const [open, setOpen] = useState(false);
  let menuRef = useRef();


  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <>
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="topbar-container-hamburger">
            <GiHamburgerMenu onClick={showSidebar} />
          </div>
          <div className="topbar-container-profile">
            <div className="topbar-container-profile-pic">
              <img crossOrigin='true' src={user.profilePicture?user.profilePicture:profile} alt="profile" />
            </div>
            <div className="topbar-container-profile-arrow" onClick={()=>navigate('/profile')}>
            {/* <button className="popup-logout">Log out</button> */}
              <img
                src={arrow}
                alt="arrow"
                onClick={() => {
                  setOpen(!open);
                }}
              />
             
              {/* <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <h3 className="user-name">
                  John
                  <br />
                  <span>example@gmail.com</span>
                </h3>
                <center>
                  <button className="popup-logout">Log out</button>
                </center>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Part */}
      <div className="responsive-topbar">
        <div className={sidebar ? "" : "res-inactive"}>
          <div className="responsive">
            <div className="responsive-toggle">
              <GiTireIronCross onClick={showSidebar} />
            </div>
            <br />
            <div className="responsive-menu">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
