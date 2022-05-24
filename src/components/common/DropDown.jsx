import React, { useState, useRef, useCallback, useEffect } from "react";
import { usePopper } from "react-popper";
import { nullFn } from "./../../utils/helpers";

const Dropdown = ({
  options = [],
  key = "id",
  val = "value",
  value = "",
  onChange = nullFn,
  placeholder = "",
}) => {
  const buttonRef = useRef(null);
  const popperRef = useRef(null);
  const [arrowRef, setArrowRef] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [localvalue, setLocalValue] = useState("");

  const { styles, attributes } = usePopper(
    buttonRef.current,
    popperRef.current,
    {
      modifiers: [
        {
          name: "arrow",
          options: {
            element: arrowRef,
          },
        },
        {
          name: "offset",
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const valSelect = useCallback(
    (idx) => {
      const opt = options[idx];
      setLocalValue(opt[val]);
      setOpen(false);
    },
    [options]
  );

  useEffect(() => {
    if (value !== localvalue) setLocalValue(value);
  }, [value]);

  useEffect(() => {
    if (value !== localvalue) onChange(localvalue);
  }, [localvalue]);

  // onBlur={() => setOpen(false)}
  return (
    <div className="w-full">
      <button
        type="button"
        className="w-full text-white text-xl bg-[#232531] rounded-xl shadow-md p-3"
        ref={buttonRef}
        onClick={() => setOpen(!isOpen)}
      >
        {localvalue === "" && placeholder.length > 0 ? placeholder : localvalue}
      </button>

      {isOpen && (
        <div
          className="bg-white rounded-lg popper-container shadow-xl"
          ref={popperRef}
          style={styles.popper}
          {...attributes.popper}
        >
          <div
            className="popper-arrow hidden"
            ref={setArrowRef}
            style={styles.arrow}
            {...attributes.arrow}
          />
          <div className="border rounded-md">
            {(options || []).map((opt, z) => {
              // const isSelected = opt[val] === localvalue;
              return (
                <div
                  className="p-4 text-left text-xl cursor-pointer border-b"
                  key={z}
                  onClick={() => valSelect(z)}
                >
                  {opt[val]}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
