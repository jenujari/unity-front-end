import React from "react";

import { Input } from "./../components/common";

const Profile = () => {
  return (
    <div className="Profile-root main-container w-full">
      <h3 className="color-light  section-title  font-bold ">Your Avatar</h3>
      <div className="card-container mb-12">
        <div className="flex justify-start items-center">
          <div className="rounded-full w-20 h-20 bg-blue-700"></div>
          <button className="p-4 w-40 ml-8 font-bold rounded-lg border border-[#3f43dd] color-light">
            Withdraw
          </button>
          <button className="p-4 w-40 ml-8 font-bold rounded-lg bg-[#535353] text-white">
            Deposit
          </button>
        </div>
      </div>
      <h3 className="color-light  section-title font-bold ">Your Details</h3>
      <div className="card-container mb-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10">
          <div>
            <label className="color-light text-lg font-bold">
              Your Full Name
            </label>
            <Input className="mt-5" />
          </div>
          <div>
            <label className="color-light text-lg font-bold">
              Display Name
            </label>
            <Input className="mt-5" />
          </div>
          <div>
            <label className="color-light text-lg font-bold">Email</label>
            <Input className="mt-5" />
          </div>
          <div>
            <label className="color-light text-lg font-bold">Location</label>
            <Input className="mt-5" />
          </div>
          <div>
            <button className="bg-info font-bold text-white float-left py-6 px-16 rounded">
              Update Profile
            </button>
          </div>
          <div>&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
