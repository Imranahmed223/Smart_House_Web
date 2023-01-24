import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./SubMenu.scss";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff8f;
  padding-left: 4.2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1.5rem;
  margin-top: 0.8rem;
  margin-bottom: 0.5rem;
  list-style: none;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    border-right: 4px solid #f7f6f65d;
    cursor: pointer;
    color: white;
  }
  &::before {
    color: white;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 2.5rem;
`;

const DropdownLink = styled(Link)`
  height: 3rem;
  padding-left: 3.2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff8f;
  font-size: 1.1rem;

  &:hover {
    border-right: 4px solid #f7f6f65d;
    color: white;
    cursor: pointer;
  }
  &:active {
    color: white;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sidebar-top">
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div className="menu-item">
            <img src={item.icon} alt="icons" />
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>

          <div>
            {item.subNav && subnav ? (
              <img src={item.iconOpened}></img>
            ) : item.subNav ? (
              item.iconClosed
            ) : null}
          </div>
        </SidebarLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </div>
    </>
  );
};

export default SubMenu;
