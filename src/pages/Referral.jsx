import React from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const Referral = ({}) => {
  return (
    <div className="Referral-root main-container w-full">
      <h3 className="color-light  section-title  font-bold">Your Referral</h3>
      <div className="card-container mb-12">
        <h3 className="color-light font-bold text-xl mb-12">
          Invite your friends to Exintic and Earn 15% on Friends trading fees
        </h3>
        <button className="bg-[#47c17a] color-light font-bold rounded py-2 w-52">
          Your Referral Link
        </button>

        <div className="referral-grp p-8 mt-12 rounded-2xl">
          <p className="text-base color-light">
            https://unityexchange.design/ref?tranmautritam
            <MdOutlineContentCopy className="color-light float-right text-2xl cursor-pointer" />
          </p>
        </div>
      </div>
      <h3 className="color-light  section-title font-bold ">Rewards</h3>
      <div className="card-container mb-12">
        <p className="color-light text-xl">Total Rewards</p>
        <div className="w-full flex mt-4 bb pb-8">
          <span className="color-light text-4xl font-mono">128.256</span>
          <button className="bg-[#ff6529] color-light ml-4 py-2 w-40 rounded-xl">
            USTD
          </button>
        </div>
        <div className="w-full flex justify-between mt-8 bb pb-8">
          <div>
            <p className="color-light text-2xl">Invite Rewards</p>
            <p className="color-light italic text-sm">
              You’re earning 20% of the trading fees your referrals pay.
            </p>
          </div>
          <div>
            <p className="color-light text-right text-2xl">0.00 USDT</p>
          </div>
        </div>
        <div className="w-full flex justify-between mt-8">
          <div>
            <p className="color-light text-2xl">Total Invited</p>
          </div>
          <div>
            <p className="color-light text-right text-xl font-bold">55</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
