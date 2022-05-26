import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { CgArrowDownR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBell, BsChevronDown } from "react-icons/bs";
import { useDispatch } from "react-redux";

import { toggleSidebar, toggleTheme } from "../store/features/layout";

function Navbar() {
  const dispatch = useDispatch();
  const profileImgSrc =
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";

  const toggleSidebarCb = React.useCallback(
    () => dispatch(toggleSidebar()),
    []
  );

  const toggleThemeCb = React.useCallback(() => dispatch(toggleTheme()), []);

  return (
    <div className="Navbar--root">
      <div className="w-full flex flex-row justify-between">
        <div className="left flex flex-row justify-start items-center">
          <GiHamburgerMenu
            onClick={toggleSidebarCb}
            className="icon-ham cursor-pointer color-light"
          />
          <div className="search-group relative">
            <input
              className="txt-search font-bold p-3 rounded-lg bg-transparent font-montserrat color-light"
              type="text"
              placeholder="Search"
            />
            <RiSearchLine className="serch-icon color-light absolute  text-3xl" />
          </div>
        </div>
        <div className="right flex flex-row justify-end items-center">
          <CgArrowDownR className="text-xl color-light" />
          <button
            className="color-light text-base p-4 flex flex-row justify-between 
            items-center font-bold border border-blue-500 rounded-lg ml-8 cursor-pointer
            font-montserrat btn-exchange"
          >
            Eng/USD
            <AiOutlinePlus className="ml-3" />
          </button>
          <BsBell className="color-light text-3xl ml-8 cursor-pointer" />
          <div
            onClick={toggleThemeCb}
            className="profile-drp ml-8 relative mr-12 cursor-pointer"
          >
            <img
              src={profileImgSrc}
              alt="profile"
              className="inline-block h-12 w-12 rounded-full ring-2"
            />
            <BsChevronDown className="icon-down text-xl absolute" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
