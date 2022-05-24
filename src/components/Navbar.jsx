import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { CgArrowDownR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBell, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { toggleSidebar } from "../store/features/layout";

function Navbar() {
  const dispatch = useDispatch();
  const profileImgSrc =
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const toggleSidebarCb = React.useCallback(
    () => dispatch(toggleSidebar()),
    []
  );

  return (
    <div className="Navbar--root">
      <div className="w-full flex flex-row justify-between">
        <div className="left flex flex-row justify-start items-center">
          <GiHamburgerMenu
            onClick={toggleSidebarCb}
            className="icon-ham cursor-pointer"
          />
          <div className="search-group relative">
            <input
              className="txt-search font-montserrat"
              type="text"
              placeholder="Search"
            />
            <RiSearchLine className="serch-icon" />
          </div>
        </div>
        <div className="right flex flex-row justify-end items-center">
          <CgArrowDownR className="icon-down" />
          <span className="exch-btn font-montserrat">
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
