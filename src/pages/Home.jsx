import React from "react";
import { SiBitcoin } from "react-icons/si";
import { BiCheckCircle } from "react-icons/bi";
import { BsThreeDotsVertical, BsChevronDown, BsArrowUp } from "react-icons/bs";

import DashBanner01 from "./../static/images/dash_banner_1.jpg";

function Home() {
  return (
    <div className="main-container dashbord--root">
      <div className="w-full banner-group mb-12">
        <img className="img-banner" src={DashBanner01} alt="banner" />
      </div>
      <SignupVerify />
      <CoinGrid />
      <TransactinTable />
    </div>
  );
}

export default Home;

const SignupVerify = () => {
  return (
    <div className="card-container sign-verify-group mb-12">
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3).keys()].map((i) => (
          <div key={i} className={`block ${i !== 2 ? "sucess" : ""}`}>
            <div className="text-center">
              <div className="rounded-full p-4 bg-white inline-flex mt-8">
                {i !== 2 ? (
                  <BiCheckCircle className="text-6xl icon-check" />
                ) : (
                  <span className="step">{i + 1}</span>
                )}
              </div>
              <h3 className={`title ${i == 2 ? "sucess" : ""}`}>
                {i == 0 && "Sign Up!"}
                {i == 1 && "Verify"}
                {i == 2 && "Start Earning!"}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CoinGrid = () => {
  return (
    <div className="coin-grid">
      <div className="flex flex-row justify-between w-full mb-8">
        <div className="left">
          <button className="btn-tabs active">Core Assets</button>
          <button className="btn-tabs">Top Gainers</button>
          <button className="btn-tabs">Trending</button>
          <button className="btn-tabs">Tools</button>
        </div>
        <div className="right">
          <button className="text-white flex items-center">
            Market Cap
            <BsChevronDown className="ml-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {[...Array(12).keys()].map((i) => (
          <div key={i} className="card">
            <div className="w-full text-center text-3xl text-white">
              <SiBitcoin className="icon-btc" />
              Bitcon (BTC)
            </div>
            <div className="w-full mt-[118px] mb-[68px] grid place-items-center">
              <p className="txt-bull">
                +9.06%
                <BsArrowUp className="ml-1" />
              </p>
              <p className="txt-amt">$54,000,78.00</p>
              <p className="txt-label">Market Cap</p>
            </div>
          </div>
        ))}
      </div>
      <button className=" bg-info text-white w-full py-4 rounded mb-12 font-bold">
        Discover more assets
      </button>
    </div>
  );
};

const TransactinTable = () => {
  return (
    <div className="transactions-group">
      <button className="btn">Wallets Transactions</button>
      <table className="tbl w-full">
        <thead>
          <tr>
            <th className="text-left">Type</th>
            <th className="text-left">Date</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Address/Transactions</th>
            <th className="text-left">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
          <tr>
            <td>Withdraw BTC</td>
            <td>15 May 2016</td>
            <td>0.12340000 BTC</td>
            <td>
              <h5 className="text-white">jhgde8723gfwe9f934</h5>
              <h5 className="text-gray-500">asdfawr23456ergs4356</h5>
            </td>
            <td>
              <BsThreeDotsVertical className="text-white" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className=" bg-info text-white w-full py-4 rounded mb-12 font-bold">
        Discover more assets
      </button>
    </div>
  );
};
