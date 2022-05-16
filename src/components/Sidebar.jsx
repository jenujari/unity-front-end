import React from "react";
import { NavLink } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";

const activeClassName = "active";

const Sidebar = () => {
  return (
    <div className="Sidebar--root">
      <div className="banner flex flex-row justify-start">
        <h3 className="text-white text-2xl">Unity.</h3>
        <span className="inline-block text-white text-2xl self-center ml-auto mr-8">
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
          <NavLink to="/e">
            <li className="menu-item">Exchange</li>
          </NavLink>
          <NavLink to="/p">
            <li className="menu-item">Profile</li>
          </NavLink>
          <NavLink to="/r">
            <li className="menu-item">Referral</li>
          </NavLink>
          <NavLink to="/history">
            <li className="menu-item">History</li>
          </NavLink>
          <NavLink to="/s">
            <li className="menu-item">Settings</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
