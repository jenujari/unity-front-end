import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { SiBitcoin } from "react-icons/si";

const History = () => {
  return (
    <div className="main-container History--root w-full">
      <h3 className="color-light  section-title  font-bold ">History</h3>
      <div className="flex flex-row justify-between w-full mb-12">
        <div className="left flex flex-col md:flex-row">
          <button className="btn-tabs active">All</button>
          <button className="btn-tabs">Withdrawals</button>
          <button className="btn-tabs">Deposit</button>
          <button className="btn-tabs">Bank Withdraws</button>
        </div>
        <div className="right">
          <button className="color-light flex text-lg items-center">
            open
            <BsChevronDown className="ml-2" />
          </button>
        </div>
      </div>
      <div className="card-container mb-12">
        <table className="tbl w-full">
          <thead>
            <tr>
              <th className="text-left">Asset</th>
              <th className="text-left">Date</th>
              <th className="text-right">Orders</th>
              <th className="text-right">Amounts</th>
              <th className="text-right">Address / Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Asset">
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-base font-medium color-light ml-3">
                    USDT
                  </span>
                </div>
              </td>
              <td data-title="Date">
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-left md:text-right" data-title="Orders">
                <p className="color-light text-left md:text-right font-bold text-lg">
                  0.2785689852 BTC
                </p>
                <p className="text-gray-500 text-left md:text-right text-base">
                  10,098.36 USD
                </p>
              </td>
              <td className="text-left md:text-right" data-title="Amounts">
                <h5 className="color-light text-left md:text-right font-bold text-lg">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-left md:text-right text-base">
                  10,098.36 USD
                </h5>
              </td>
              <td data-title="Address">
                <p className="color-light text-left md:text-right text-base whitespace-normal break-all">
                  jhgde8723gfwe9f934
                </p>
                <p className="text-gray-500  text-left md:text-right text-base whitespace-normal break-all">
                  asdfawr23456ergs4356
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <button className=" bg-info text-white font-poppins text-lg w-full py-4 rounded mb-12 font-bold">
          Load more
        </button>
      </div>
    </div>
  );
};

export default History;
