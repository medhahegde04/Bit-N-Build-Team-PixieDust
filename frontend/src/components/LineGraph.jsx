import React from "react";
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

const flattenData = (node, result = [], level = 0) => {
  result.push({
    name: node.label,
    amount: node.amount,
    type: node.type,
    level,
  });

  if (node.children) {
    node.children.forEach((child) => flattenData(child, result, level + 1));
  }
  return result;
};

const formatCurrency = (value, currency = "INR") => {
  if (currency === "USD") return `$${Number(value).toLocaleString("en-US")}`;
  return `₹${Number(value).toLocaleString("en-IN")}`;
};

function LineGraph({ data, currency = "INR" }) {
  const USD_RATE = 0.012; // example conversion: 1 INR ≈ 0.012 USD
  const trendData = flattenData(data).map((d) => ({
    ...d,
    amount: currency === "USD" ? d.amount * USD_RATE : d.amount,
  }));

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={trendData}
          margin={{ top: 20, right: 30, left: 70, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            interval={0}
            textAnchor="end"
          />
          <YAxis
            width={60}
            tickFormatter={(value) => formatCurrency(value, currency)}
          />
          <Tooltip formatter={(value) => formatCurrency(value, currency)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="amount"
            stroke="#3b82f6"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
