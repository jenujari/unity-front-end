import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { SiBitcoin } from "react-icons/si";
import { IoDocumentsSharp } from "react-icons/io5";
import gauges from "./../static/images/gauges.png";

const ProfileBar = () => {
  const dispatch = useDispatch();
  const profileBar = useSelector((state) => state.layout.profileBar);
  return (
    <div className={`Profilebar--root ${profileBar ? "open" : ""}`}>
      <div style={{ padding: "1rem" }} className="card-container">
        <div className="w-full grid place-content-center">
          <img src={gauges} alt="gauges" />
        </div>
        <p className="color-light text-center mt-6">Total Balance</p>
        <div className="grid place-content-center mt-6">
          <SiBitcoin className="color-warning text-4xl" />
        </div>
        <p className="color-light text-center font-light mt-2">Bitcoin (BTC)</p>
        <p className="color-light text-center font-bold text-2xl mt-2">
          0.16231428
        </p>
        <p className="text-[#25af7c] text-center font-thin mt-2">
          3,700.96 USD
        </p>
        <div className="flex justify-between items-center mt-4">
          <button
            style={{ padding: "1rem", fontSize: "smaller" }}
            className="cst-btn bg-danger"
          >
            Withdraw
          </button>
          <button
            style={{ padding: "1rem", fontSize: "smaller" }}
            className="cst-btn bg-success"
          >
            Deposit
          </button>
        </div>
        <button className="cst-btn mt-6 bg-info w-full">Convert</button>
      </div>
      <h3
        style={{ lineHeight: "1.2rem", fontSize: "1.2rem" }}
        className="color-light  section-title  font-bold mt-8"
      >
        Announcements
      </h3>
      <div style={{ padding: "1rem" }} className="card-container mt-4">
        <ul className="req_list">
          <li className="itm color-light">
            <span className="doc-ico">
              <IoDocumentsSharp className="color-light text-center inline-block" />
            </span>
            <span className="inline-block break-words whitespace-pre-line">
              Wrapped Bitcoin is now listed on Exinitic
            </span>
          </li>
          <li className="itm color-light">
            <span style={{ backgroundColor: "#47c179" }} className="doc-ico">
              <IoDocumentsSharp className="color-light text-center inline-block" />
            </span>
            <span className="inline-block break-words whitespace-pre-line">
              CyberVein Token is now Available in Exinitic
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileBar;
