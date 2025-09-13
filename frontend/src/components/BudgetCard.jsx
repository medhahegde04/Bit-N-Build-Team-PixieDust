import React from "react";

function BudgetCard({ title, amount, allocated, spent, department, status, lastUpdated }) {
  const getStatusColor = (s) => {
    switch (s) {
      case "on-track":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "over-budget":
        return "text-red-600 bg-red-100";
      default:
        return "text-slate-600 bg-slate-100";
    }
  };

  const getStatusText = (s) => {
    switch (s) {
      case "on-track":
        return "On Track";
      case "warning":
        return "Warning";
      case "over-budget":
        return "Over Budget";
      default:
        return "Unknown";
    }
  };

  const spentPercentage = allocated ? (spent / allocated) * 100 : 0;
  const remainingPercentage = 100 - spentPercentage;

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">{title}</h3>
          <p className="text-sm text-slate-600">{department}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {getStatusText(status)}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Total Budget</span>
          <span className="font-semibold text-slate-900">₹{Number(amount).toLocaleString("en-IN")}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Allocated</span>
          <span className="font-semibold text-blue-600">₹{Number(allocated).toLocaleString("en-IN")}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-600">Spent</span>
          <span className="font-semibold text-slate-900">₹{Number(spent).toLocaleString("en-IN")}</span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(spentPercentage, 100)}%` }}
          />
        </div>

        <div className="flex justify-between text-xs text-slate-500">
          <span>{spentPercentage.toFixed(1)}% spent</span>
          <span>{remainingPercentage.toFixed(1)}% remaining</span>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <p className="text-xs text-slate-500">Last updated: {lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}

export default BudgetCard;
