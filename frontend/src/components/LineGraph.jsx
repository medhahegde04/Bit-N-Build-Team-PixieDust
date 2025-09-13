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

function LineGraph({ data }) {
  const trendData = flattenData(data);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={trendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineGraph;
