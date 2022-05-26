import React from "react";

import QR from "./../static/images/QR.png";

const OTPInput = () => {
  const inputs = document.querySelectorAll("#otp > *[id]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keydown", function (event) {
      if (event.key === "Backspace") {
        inputs[i].value = "";
        if (i !== 0) inputs[i - 1].focus();
      } else {
        if (i === inputs.length - 1 && inputs[i].value !== "") {
          return true;
        } else if (
          (event.keyCode > 47 && event.keyCode < 58) ||
          (event.keyCode >= 96 && event.keyCode <= 105)
        ) {
          inputs[i].value = event.key;
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        } else if (event.keyCode > 64 && event.keyCode < 91) {
          inputs[i].value = String.fromCharCode(event.keyCode);
          if (i !== inputs.length - 1) inputs[i + 1].focus();
          event.preventDefault();
        }
      }
    });
  }
};

const Authenticator = () => {
  React.useEffect(() => {
    setTimeout(OTPInput, 100);
  }, []);

  return (
    <div className="Authenticator-root main-container w-full">
      <h3 className="color-light section-title font-bold">Scan Code</h3>
      <div className="card-container mb-12">
        <div className="grid qr_grid gap-4">
          <div className="cell p-4 rounded-xl grid place-content-center">
            <img src={QR} alt="QR" className="img-qr" />
          </div>
          <div className="cell p-4 px-8 rounded-xl">
            <p className="color-light text-sm">
              If you want to turn on 2FA, use Google Authenticator app to scan
              code, then enter six-digit code provided by the app to the form
              below.
            </p>
            <div className="grid place-content-center mt-8">
              <button className="rounded py-3 w-48 color-light  bg-[#47c17a]">
                Download 2FA App
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="color-light section-title font-bold">
        Enter Six-Digit Code
      </h3>
      <div className="card-container mb-12">
        <div id="otp" className="grid grid-cols-6 gap-3">
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="first"
            maxLength="1"
            placeholder=" "
          />
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="second"
            maxLength="1"
            placeholder=" "
          />
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="third"
            maxLength="1"
            placeholder=" "
          />
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="fourth"
            maxLength="1"
            placeholder=" "
          />
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="fifth"
            maxLength="1"
            placeholder=" "
          />
          <input
            className="otp-box form-control form-control-solid"
            type="text"
            id="sixth"
            maxLength="1"
            placeholder=" "
          />
        </div>
      </div>
    </div>
  );
};

export default Authenticator;
