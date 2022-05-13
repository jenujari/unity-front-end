import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { decrement, increment } from "../store/features/counter";

function QuickBuy() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="flex flex-row justify-between">
          <button
            className="btn btn-danger"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span className="text-3xl text-white">{count}</span>
          <button
            className="btn btn-danger"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuickBuy;
