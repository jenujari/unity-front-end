import React from "react";

const Profile = () => {
  return (
    <div className="Profile-root main-container w-full">
      <h3 className="title text-4xl font-bold mb-12">Your Avatar</h3>
      <div className="card-container mb-12">
        <div className="flex justify-start items-center">
          <div className="rounded-full w-40 h-40 bg-blue-700"></div>
          <button className="p-4 w-40 ml-8 rounded-lg border border-[#3f43dd] text-white">
            Withdraw
          </button>
          <button className="p-4 w-40 ml-8 rounded-lg bg-[#535353] text-white">
            Deposit
          </button>
        </div>
      </div>
      <h3 className="title text-4xl font-bold mb-12">Your Details</h3>
      <div className="card-container mb-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          <div>
            <label className="text-white text-lg font-bold">
              Your Full Name
            </label>
            <input className="mt-5 h-12 w-full rounded-xl bg-[#232531] shadow-md" />
          </div>
          <div>
            <label className="text-white text-lg font-bold">Display Name</label>
            <input className="mt-5 h-12 w-full rounded-xl bg-[#232531] shadow-md" />
          </div>
          <div>
            <label className="text-white text-lg font-bold">Email</label>
            <input className="mt-5 h-12 w-full rounded-xl bg-[#232531] shadow-md" />
          </div>
          <div>
            <label className="text-white text-lg font-bold">Location</label>
            <input className="mt-5 h-12 w-full rounded-xl bg-[#232531] shadow-md" />
          </div>
          <div>
            <button className="bg-info text-white float-left h-12 w-32 rounded">
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
