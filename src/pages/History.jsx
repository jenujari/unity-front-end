import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { SiBitcoin } from "react-icons/si";

const History = () => {
  return (
    <div className="main-container History--root w-full">
      <h3 className="title text-4xl font-bold mb-12">History</h3>
      <div className="flex flex-row justify-between w-full mb-12">
        <div className="left">
          <button className="btn-tabs active">All</button>
          <button className="btn-tabs">Withdrawals</button>
          <button className="btn-tabs">Deposit</button>
          <button className="btn-tabs">Bank Withdraws</button>
        </div>
        <div className="right">
          <button className="text-white flex text-lg items-center">
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
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    USDT
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    ETH
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    USDT
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    ETH
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    USDT
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex flex-row justify-start items-center">
                  <SiBitcoin className="color-warning text-2xl" />
                  <span className="text-xl font-medium text-white ml-3">
                    ETH
                  </span>
                </div>
              </td>
              <td>
                <span className="text-sm font-extralight">
                  Jan 17th, 2022 10:56:41
                </span>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="text-white text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td>
                <h5 className="text-white text-right">jhgde8723gfwe9f934</h5>
                <h5 className="text-gray-500  text-right">
                  asdfawr23456ergs4356
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
        <button className=" bg-info text-white w-full py-4 rounded mb-12 font-bold">
          Load more
        </button>
      </div>
    </div>
  );
};

export default History;
