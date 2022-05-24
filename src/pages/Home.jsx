import React from "react";
import { SiBitcoin } from "react-icons/si";
import { CgArrowLongRightE } from "react-icons/cg";
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
    <>
      <p className="color-light font-roboto text-5xl font-bold mb-2">
        How it works
      </p>
      <p className="color-light font-roboto text-2xl font-light">
        Get Started with 3 easy steps
      </p>
      <div className="sign-verify-group mb-12 flex">
        <div>
          <p className="font-montserrat text-duo">1</p>
          <p className="color-light font-roboto text-3xl mb-4">Sign up</p>
          <div className="grad_border  mb-4"></div>
          <p
            style={{ lineHeight: "32px" }}
            className="color-light font-montserrat text-lg font-bold"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            quas perspiciatis ad atque qui similique laboriosam eum hic! Iste
            facilis suscipit corporis ea optio odit nulla repellat maiores animi
            necessitatibus?
          </p>
        </div>
        <div className="grid place-content-center ml-4 mr-12">
          <div className="next-div grid place-content-center">
            <CgArrowLongRightE className="text-white text-4xl" />
          </div>
        </div>
        <div>
          <p className="font-montserrat text-duo">2</p>
          <p className="color-light font-roboto text-3xl mb-4">Verify</p>
          <div className="grad_border  mb-4"></div>
          <p
            style={{ lineHeight: "32px" }}
            className="color-light font-montserrat text-lg font-bold"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            quas perspiciatis ad atque qui similique laboriosam eum hic! Iste
            facilis suscipit corporis ea optio odit nulla repellat maiores animi
            necessitatibus?
          </p>
        </div>
        <div className="grid place-content-center ml-4 mr-12">
          <div className="next-div grid place-content-center">
            <CgArrowLongRightE className="text-white text-4xl" />
          </div>
        </div>
        <div>
          <p className="font-montserrat text-duo">3</p>
          <p className="color-light font-roboto text-3xl mb-4">Start Earning</p>
          <div className="grad_border  mb-4"></div>
          <p
            style={{ lineHeight: "32px" }}
            className="color-light font-montserrat text-lg font-bold"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            quas perspiciatis ad atque qui similique laboriosam eum hic! Iste
            facilis suscipit corporis ea optio odit nulla repellat maiores animi
            necessitatibus?
          </p>
        </div>
      </div>
    </>
  );
};

const CoinGrid = () => {
  return (
    <div className="coin-grid pt-12">
      <div className="flex flex-row justify-between w-full mb-8">
        <div className="left">
          <button className="btn-tabs active">Core Assets</button>
          <button className="btn-tabs">Top Gainers</button>
          <button className="btn-tabs">Trending</button>
          <button className="btn-tabs">Tools</button>
        </div>
        <div className="right">
          <button className="text-white font-roboto font-bold flex items-center">
            Market Cap
            <BsChevronDown className="ml-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        {[...Array(12).keys()].map((i) => (
          <div key={i} className="card">
            <div className="w-full font-roboto font-bold text-center text-3xl mt-12 color-light">
              <SiBitcoin className="icon-btc" />
              Bitcoin (BTC)
            </div>
            <div className="w-full mt-[118px] mb-[68px] grid place-items-center">
              <p className="txt-bull font-roboto">
                +9.06%
                <BsArrowUp className="ml-1" />
              </p>
              <p className=" font-extrabold text-2xl color-light font-roboto">
                $54,000,78.00
              </p>
              <p className="color-light text-xs mt-4 font-roboto">Market Cap</p>
            </div>
            <button className="quik-buy bg-info text-white font-bold text-lg left-0 w-full absolute py-3">
              Quick Buy
            </button>
          </div>
        ))}
      </div>
      <button className=" bg-info text-white w-full font-poppins text-lg py-4 rounded mb-12 font-bold">
        Discover more assets
      </button>
    </div>
  );
};

const TransactinTable = () => {
  return (
    <div className="transactions-group w-full">
      <button className="btn px-8 py-4 rounded-md text-lg font-bold font-roboto">
        Wallets Transactions
      </button>
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
      <button className=" bg-info text-white w-full font-poppins text-lg py-4 rounded mb-12 font-bold">
        Discover more assets
      </button>
    </div>
  );
};
