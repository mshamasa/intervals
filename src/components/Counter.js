import React from "react";

import "./Counter.css";

export default function Counter({ count, displayText }) {
  return (
    <div className="CounterContainer">
      <div>{displayText}</div>
      <div>{count}</div>
    </div>
  );
}
