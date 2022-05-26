import React from "react";
import { SiBitcoin } from "react-icons/si";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillRecordCircleFill } from "react-icons/bs";

function Wallet() {
  return (
    <div className="main-container Wallet--root w-full">
      <WalletOverview />
      <AccountBalance />
      <AssetBalance />
    </div>
  );
}

export default Wallet;

const WalletOverview = ({}) => {
  return (
    <>
      <h3 className="color-light font-bold  section-title ">Overview</h3>
      <div className="card-container flex flex-col md:flex-row md:justify-between mb-12">
        <div className="left">
          <h6 className="color-light text-md">Total Balance</h6>
          <h3 className="color-light text-4xl font-bold mt-3 inline-flex">
            0.16231428
            <span className="ml-3 bit-icon">
              <SiBitcoin />
            </span>
          </h3>
          <h6 className="green-usd mt-2">3,700.96 USD</h6>
        </div>
        <div className="right self-center w-full md:w-auto mt-8 md:mt-0">
          <div className="flex flex-col justify-start items-start md:flex-row">
            <button className="cst-btn bg-danger mr-7">Withdraw</button>
            <button className="cst-btn mt-8 md:mt-0 bg-success  mr-7">
              Deposit
            </button>
            <button className="cst-btn mt-8 md:mt-0 bg-info">Convert</button>
          </div>
        </div>
      </div>
    </>
  );
};

const AccountBalance = ({}) => {
  return (
    <>
      <h3 className="color-light font-bold  section-title ">
        Account Balances
      </h3>
      <div className="card-container mb-12">
        <div className="balances grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card-block balance-margin">
            <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
              <span className="mr-3 text-4xl icon-circle">
                <BsFillRecordCircleFill />
              </span>
              Margin
            </h3>
            <h5 className="color-light text-right font-bold text-2xl">
              0.2785689852 BTC
            </h5>
            <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
            <div className="flex flex-row justify-center mt-4">
              <button className="cst-btn btn-border mr-5">Deposit</button>
              <button className="cst-btn btn-border">Transfer</button>
            </div>
          </div>
          <div className="card-block balance-flatspot">
            <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
              <span className="mr-3 text-4xl icon-circle">
                <BsFillRecordCircleFill />
              </span>
              Flat and Spot
            </h3>
            <h5 className="color-light text-right font-bold text-2xl">
              0.2785689852 BTC
            </h5>
            <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
            <div className="flex flex-row justify-center mt-4">
              <button className="cst-btn btn-border mr-5">Deposit</button>
              <button className="cst-btn btn-border">Transfer</button>
            </div>
          </div>
          <div className="card-block balance-p2p">
            <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
              <span className="mr-3 text-4xl icon-circle">
                <BsFillRecordCircleFill />
              </span>
              P2P
            </h3>
            <h5 className="color-light text-right font-bold text-2xl">
              0.2785689852 BTC
            </h5>
            <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
            <div className="flex flex-row justify-center mt-4">
              <button className="cst-btn btn-border mr-5">Deposit</button>
              <button className="cst-btn btn-border">Transfer</button>
            </div>
          </div>
          <div className="card-block balance-futures">
            <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
              <span className="mr-3 text-4xl icon-circle">
                <BsFillRecordCircleFill />
              </span>
              Futures
            </h3>
            <h5 className="color-light text-right font-bold text-2xl">
              0.2785689852 BTC
            </h5>
            <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
            <div className="flex flex-row justify-center mt-4">
              <button className="cst-btn btn-border mr-5">Deposit</button>
              <button className="cst-btn btn-border">Transfer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AssetBalance = ({}) => {
  return (
    <>
      <h3 className="color-light font-bold  section-title ">Asset Balances</h3>
      <div className="card-container mb-12">
        <table className="tbl w-full">
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th className="text-left">Asset</th>
              <th className="text-left">Earn</th>
              <th className="text-right">On Orders</th>
              <th className="text-right">Available Balance</th>
              <th className="text-right">Total Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <AiFillStar />
              </td>
              <td>USDT</td>
              <td>
                <span className="py-2 px-6 bg-success rounded-lg">
                  7.46% APR
                </span>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
            </tr>
            <tr>
              <td>
                <AiOutlineStar />
              </td>
              <td>ETH</td>
              <td>
                <span className="py-2 px-6 bg-success rounded-lg">
                  7.46% APR
                </span>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
              <td className="text-right">
                <h5 className="color-light text-right font-bold text-2xl">
                  0.2785689852 BTC
                </h5>
                <h5 className="text-gray-500 text-right text-xl">
                  10,098.36 USD
                </h5>
              </td>
            </tr>
          </tbody>
        </table>
        <button className=" bg-info text-white font-poppins w-full py-4 rounded mb-12 font-bold">
          Load more
        </button>
      </div>
    </>
  );
};
