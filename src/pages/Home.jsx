import React from "react";
import { SiBitcoin } from "react-icons/si";
import { BsFillRecordCircleFill } from "react-icons/bs";

function Home() {
  return (
    <div className="main-container Home--root">
      <div className="overview-box">
        <h3 className="title text-3xl mb-5">Overview</h3>
        <div className="card-container flex flex-row justify-between mb-12">
          <div className="left">
            <h6 className="title text-md">Total Balance</h6>
            <h3 className="title text-4xl font-bold mt-3 inline-flex">
              0.16231428
              <span className="ml-3 bit-icon">
                <SiBitcoin />
              </span>
            </h3>
            <h6 className="green-usd mt-2">3,700.96 USD</h6>
          </div>
          <div className="right self-center">
            <div className="flex flex-row">
              <button className="btn btn-danger mr-7">Withdraw</button>
              <button className="btn btn-success  mr-7">Deposit</button>
              <button className="btn btn-info">Convert</button>
            </div>
          </div>
        </div>
        <h3 className="title text-3xl mb-5">Account Balances</h3>
        <div className="card-container">
          <div className="balances grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-block balance-margin">
              <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
                <span className="mr-3 text-4xl icon-circle">
                  <BsFillRecordCircleFill />
                </span>
                Margin
              </h3>
              <h5 className="text-white text-right font-bold text-2xl">
                0.2785689852 BTC
              </h5>
              <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
              <div className="flex flex-row justify-center mt-4">
                <button className="btn btn-border mr-5">Deposit</button>
                <button className="btn btn-border">Transfer</button>
              </div>
            </div>
            <div className="card-block balance-flatspot">
              <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
                <span className="mr-3 text-4xl icon-circle">
                  <BsFillRecordCircleFill />
                </span>
                Flat and Spot
              </h3>
              <h5 className="text-white text-right font-bold text-2xl">
                0.2785689852 BTC
              </h5>
              <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
              <div className="flex flex-row justify-center mt-4">
                <button className="btn btn-border mr-5">Deposit</button>
                <button className="btn btn-border">Transfer</button>
              </div>
            </div>
            <div className="card-block balance-p2p">
              <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
                <span className="mr-3 text-4xl icon-circle">
                  <BsFillRecordCircleFill />
                </span>
                P2P
              </h3>
              <h5 className="text-white text-right font-bold text-2xl">
                0.2785689852 BTC
              </h5>
              <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
              <div className="flex flex-row justify-center mt-4">
                <button className="btn btn-border mr-5">Deposit</button>
                <button className="btn btn-border">Transfer</button>
              </div>
            </div>
            <div className="card-block balance-futures">
              <h3 className="inline-flex flex-row items-center text-xl text-muted mb-4">
                <span className="mr-3 text-4xl icon-circle">
                  <BsFillRecordCircleFill />
                </span>
                Futures
              </h3>
              <h5 className="text-white text-right font-bold text-2xl">
                0.2785689852 BTC
              </h5>
              <h5 className="text-muted text-right text-xl">10,098.36 USD</h5>
              <div className="flex flex-row justify-center mt-4">
                <button className="btn btn-border mr-5">Deposit</button>
                <button className="btn btn-border">Transfer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
