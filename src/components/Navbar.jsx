import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { CgArrowDownR } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBell, BsChevronDown } from "react-icons/bs";

function Navbar() {
  const profileImgSrc =
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  return (
    <div className="Navbar--root">
      <div className="w-full flex flex-row justify-between">
        <div className="left">
          <div className="search-group relative">
            <input className="txt-search" type="text" placeholder="Search" />
            <RiSearchLine className="serch-icon" />
          </div>
        </div>
        <div className="right flex flex-row justify-end items-center">
          <CgArrowDownR className="icon-down" />
          <span className="exch-btn">
            Eng/USD
            <AiOutlinePlus className="icon-plus" />
          </span>
          <BsBell className="icon-bell" />
          <div className="profile-drp">
            <img src={profileImgSrc} alt="profile" />
            <BsChevronDown className="icon-down" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
