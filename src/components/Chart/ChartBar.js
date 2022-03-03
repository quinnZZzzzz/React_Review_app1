import "./ChartBar.css";
import React, { useState } from "react";

const ChartBar = (props) => {
  // const [barFillHeight, setBarFillHeight] = useState("0%");
  let barFillHeight = "0%";

  if (props.maxVal > 0) {
    barFillHeight = Math.round((props.value / props.maxVal) * 100) + "%";
  }
  // console.log(props);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
