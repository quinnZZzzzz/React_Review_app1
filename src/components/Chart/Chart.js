import "./Chart.css";
import ChartBar from "./ChartBar";

import React from "react";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  let totalMaximum = 0;
  for (let i of dataPointsValues) {
    totalMaximum += i;
  }

  // console.log(props.dataPoints);
  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxVal={totalMaximum}
          key={data.label}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
