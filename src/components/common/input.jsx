import React from "react";

const INPUT_CLASS = [
  "w-full",
  "rounded-xl",
  "shadow-md",
  "p-3",
  "text-white",
  "text-xl",
  "input-bg",
];

const Input = ({ type = "text", className = "", ...props }) => {
  let classList = React.useMemo(() => INPUT_CLASS, []);

  if (className.length > 0) {
    classList = [...classList, ...className.split(" ")];
  }

  return <input type={type} className={classList.join(" ")} {...props} />;
};

export default Input;
