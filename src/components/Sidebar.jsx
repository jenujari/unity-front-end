import React from "react";
import { BsBoxArrowLeft } from "react-icons/bs";

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
          <li className="menu-item">Dashbord</li>
          <li className="menu-item active">Wallet</li>
          <li className="menu-item">Quick Buy</li>
          <li className="menu-item">Exchange</li>
          <li className="menu-item">Profile</li>
          <li className="menu-item">Referral</li>
          <li className="menu-item">History</li>
          <li className="menu-item">Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
