import React from "react";
import { BsChevronDown, BsArrowUp } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

function QuickBuy() {
  return (
    <div className="Quickbuy-root main-container w-full">
      <h3 className="color-light text-4xl font-bold mb-12">
        Buy and sell cryptocurrencies in click!
      </h3>
      <div className="flex flex-row justify-between w-full mb-12">
        <div className="left">
          <button className="btn-tabs active">All currencies</button>
          <button className="btn-tabs">Top Gainers</button>
          <button className="btn-tabs">Losers</button>
        </div>
        <div className="right">
          <button className="color-light font-bold rounded-2xl hover:drop-shadow-xl hover:border p-6 flex text-lg items-center">
            Last 24 hour
            <BsChevronDown className="ml-2" />
          </button>
        </div>
      </div>
      <div className="flex w-full flew-row justify-start mb-12">
        <div className="search-grp">
          <input placeholder="Currency" className="txt-search" />
          <AiOutlineSearch className="icon-search" />
        </div>
      </div>
      <div className="w-full mb-16 grid grid-cols-5 gap-4">
        {currencyList.map((c, i) => (
          <div className="card relative overflow-hidden" key={i}>
            <div className="w-full text-center font-bold text-3xl mt-6 text-white">
              {/* coin icon will be here */}
              {c.title}
            </div>
            <div className="w-full mt-[68px] mb-[68px] grid place-items-center">
              <p className="txt-bull">
                {c.change}
                <BsArrowUp className="ml-1" />
              </p>
              <p className="txt-amt">{c.cap}</p>
              <p className="txt-label">{c.label}</p>
            </div>
            <div className="action-grp absolute bottom-0 grid grid-cols-2 w-full left-0">
              <button className="buy">
                <p className="font-bold">Buy</p>
                <p>{c.buy}</p>
              </button>
              <button className="sell">
                <p className="font-bold">Sell</p>
                <p>{c.buy}</p>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickBuy;

const currencyList = [
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "BTC",
    title: "Bitcoin (BTC)",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "ETH",
    title: "Ethereum (ETH)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "LGS",
    title: "Logis Coin (LGS)",
    change: "+5.65%",
    cap: "$23,659,33.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
  {
    symbol: "RPL",
    title: "Ripple",
    change: "+9.06%",
    cap: "$50,000,56.00",
    label: "Marketcap",
    buy: "22.79 USD",
    sell: "22.81 USD",
  },
];
