import React from "react";
import { NavLink } from "react-router-dom";
import { BsBoxArrowLeft, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

import { toggleSidebar } from "../store/features/layout";
import DarkLogo from "./../static/images/logo-white.svg";
import LightLogo from "./../static/images/logo-black.svg";

const activeClassName = "active";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.layout.sidebar);
  const isDarktheme = useSelector((state) => state.layout.darkTheme);

  const subToggle = React.useCallback((e) => {
    const li = e.target;
    if (li) {
      if (li.classList.contains("open")) {
        li.classList.remove("open");
      } else {
        li.classList.add("open");
      }
    }
  }, []);

  const toggleSidebarCb = React.useCallback(
    () => dispatch(toggleSidebar()),
    []
  );

  return (
    <div className={`Sidebar--root ${isSidebarOpen ? "open" : ""}`}>
      <div className="banner flex flex-row justify-start">
        {!!isDarktheme && (
          <img src={DarkLogo} alt="Unity" className="cursor-pointer w-40" />
        )}
        {!isDarktheme && (
          <img src={LightLogo} alt="Unity" className="cursor-pointer w-40" />
        )}
        <span
          onClick={toggleSidebarCb}
          className="inline-block cursor-pointer color-light text-3xl self-center ml-auto mr-8"
        >
          <BsBoxArrowLeft />
        </span>
      </div>
      <div className="menu-bar">
        <ul className="menus">
          <NavLink to="/">
            <li className="menu-item">Dashbord</li>
          </NavLink>
          <NavLink to="/wallet">
            <li className="menu-item">Wallet</li>
          </NavLink>
          <NavLink to="/quick">
            <li className="menu-item">Quick Buy</li>
          </NavLink>
          <NavLink to="/docs">
            <li className="menu-item">Documents</li>
          </NavLink>
          <NavLink to="/referral">
            <li className="menu-item">Referral</li>
          </NavLink>
          <NavLink to="/history">
            <li className="menu-item">History</li>
          </NavLink>

          <li onClick={subToggle} className="menu-item linked-sub-menu">
            Settings
            <BsChevronDown className="icon-chevron down" />
            <BsChevronUp className="icon-chevron up" />
          </li>

          <li className="sub-menu">
            <ul>
              <NavLink to="/profile">
                <li className="menu-item">Profile</li>
              </NavLink>
              <NavLink to="/2fa">
                <li className="menu-item">2fa</li>
              </NavLink>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
