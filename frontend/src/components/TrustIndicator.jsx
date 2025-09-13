import React from "react";

function TrustIndicator({ score, label, description }) {
  const getColor = (s) => {
    if (s >= 90) return "text-green-600 bg-green-100";
    if (s >= 70) return "text-yellow-600 bg-yellow-100";
    return "text-red-600 bg-red-100";
  };

  const getBarColor = (s) => {
    if (s >= 90) return "bg-green-500";
    if (s >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-slate-900">{label}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getColor(score)}`}>
          {score}%
        </span>
      </div>

      <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${getBarColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>

      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default TrustIndicator;
