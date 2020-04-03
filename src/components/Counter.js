import React from "react";

import "./Counter.css";

export default function Counter({ count, displayText }) {
  return (
    <div className="CounterContainer">
      {displayText && <div>{displayText}</div>}
      {!!count && <div>{count}</div>}
    </div>
  );
}
