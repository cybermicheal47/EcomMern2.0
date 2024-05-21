import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
  return (
    <div className="chartcontainer">
      <h3 className="charttitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#555" />
          <Line type="monotone" dataKey={dataKey} stroke="#000000" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
