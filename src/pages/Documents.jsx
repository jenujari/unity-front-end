import React from "react";
import { IoDocumentsSharp } from "react-icons/io5";

import { Input, Dropdown } from "./../components/common";

const drpOptions = [
  { id: "Id", value: "Proof of ID" },
  { id: "Address", value: "Proof of Address" },
];

export default function Documents() {
  return (
    <div className="main-container Documents--root w-full">
      <h3 className="color-light text-4xl font-bold mb-12">My Documents</h3>
      <div className="card-container mb-12">
        <div className="h-48 grid items-center wi-full">
          <p className="text-white text-center italic font-light">
            No Documents uploaded
          </p>
        </div>
      </div>
      <h3 className="color-light text-4xl font-bold mb-12">
        Upload New Document
      </h3>
      <div className="w-full grid docfrom-grid gap-3 mb-12">
        <div className="card-container p-4">
          <div className="btn-drp-grp mb-12">
            <Dropdown options={drpOptions} placeholder="Please Select" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col justify-start items-center">
              <button className="text-white px-6 py-4 w-48 rounded-xl bg-[#ff6529]">
                Front Side
              </button>
              <button className="btn-upload">Upload</button>
            </div>
            <div className="flex flex-col justify-start items-center">
              <button className="text-white px-6 py-4 w-48 rounded-xl bg-[#47c27b]">
                Back Side
              </button>
              <button className="btn-upload">Upload</button>
            </div>
          </div>
          <div className="optional_form mt-12">
            <h3 className="text-white text-xl font-bold mb-8">
              Fill in your details for seamleass expiriance. (Optional)
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
              <div>
                <label className="text-white text-lg font-bold">
                  Document Number
                </label>
                <Input className="mt-5" />
              </div>
              <div>
                <label className="text-white text-lg font-bold">
                  Country of Issue
                </label>
                <Input className="mt-5" />
              </div>
              <div>
                <label className="text-white text-lg font-bold">
                  Date of Issue
                </label>
                <Input className="mt-5" />
              </div>
              <div>
                <label className="text-white text-lg font-bold">
                  Date of Expiry
                </label>
                <Input className="mt-5" />
              </div>
              <div>
                <p className="text-white italic text-sm">
                  (Maximum size of document 5mb) Allowed file format *.jpg,
                  *.png, *.pdf
                </p>
              </div>
              <div>
                <button className="bg-info text-white float-right h-12 w-32 rounded">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-container p-4">
          <h3 className="text-white text-center font-bold text-lg mb-12">
            KYC Requirements
          </h3>
          <ul className="req_list">
            <li className="itm">
              <span className="doc-ico">
                <IoDocumentsSharp className="text-white text-center inline-block" />
              </span>
              <span>Proof of ID</span>
            </li>
            <li className="itm">
              <span className="doc-ico">
                <IoDocumentsSharp className="text-white text-center inline-block" />
              </span>
              <span>Proof of Address</span>
            </li>
          </ul>
        </div>
      </div>
      <h3 className="color-light text-4xl font-bold mb-12">
        Uploaded Documents
      </h3>
      <div className="card-container mb-12">
        <p className="text-[#727272] text-lg font-medium mb-12">
          Please provide a clear color copy of both sides of a non-expired and
          valid ID document indicating your Full Name and Date of Birth as
          provided in your application.
        </p>

        <p className="text-[#727272] text-lg font-medium mb-12">
          Please see below a list of all acceptable documents
        </p>

        <p className="text-[#727272] text-lg font-medium mb-12">- Passport</p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          - Identity Card
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          - Proof of Address
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          Please provide a clear copy of Proof of Address stating your full
          name, address and issuing authority, issued within the last three(3)
          months
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          The address should match the one used during your application.
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          You are kindly advised to provide colored full-page documents. All
          information such as issuing date, issuer, billing name, and address
          should be clearly visible. You may hide any confidential information
          should as your personal account number or any transaction history.
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          List of acceptable documents
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          - Utility bill such as electricity, gas, water
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          - Bank/Credit Card Statement
        </p>
        <p className="text-[#727272] text-lg font-medium mb-12">
          - Local Authority Tax Bill
        </p>
      </div>
    </div>
  );
}
