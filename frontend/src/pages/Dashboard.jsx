import React, { useState, useEffect } from "react";
import BudgetCard from "../components/BudgetCard";
import TrustIndicator from "../components/TrustIndicator";

function Dashboard() {
  const [liveData, setLiveData] = useState({
    totalBudget: 15750000,
    totalSpent: 8420000,
    totalAllocated: 14200000,
    activeProjects: 47,
    lastUpdate: new Date().toLocaleString(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => ({
        ...prev,
        totalSpent: prev.totalSpent + Math.floor(Math.random() * 5000),
        activeProjects: prev.activeProjects + (Math.random() > 0.7 ? 1 : 0),
        lastUpdate: new Date().toLocaleString(),
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const budgetData = [
    {
      title: "Education Technology",
      amount: 2500000,
      allocated: 2400000,
      spent: 1850000,
      department: "IT Department",
      status: "on-track",
      lastUpdated: "2 hours ago",
    },
    {
      title: "Infrastructure Maintenance",
      amount: 3200000,
      allocated: 3100000,
      spent: 2950000,
      department: "Facilities",
      status: "warning",
      lastUpdated: "1 hour ago",
    },
    {
      title: "Student Services",
      amount: 1800000,
      allocated: 1750000,
      spent: 1200000,
      department: "Student Affairs",
      status: "on-track",
      lastUpdated: "30 minutes ago",
    },
    {
      title: "Research Grants",
      amount: 4200000,
      allocated: 4000000,
      spent: 2100000,
      department: "Research Office",
      status: "on-track",
      lastUpdated: "45 minutes ago",
    },
    {
      title: "Campus Security",
      amount: 950000,
      allocated: 920000,
      spent: 980000,
      department: "Security",
      status: "over-budget",
      lastUpdated: "15 minutes ago",
    },
    {
      title: "Library Resources",
      amount: 750000,
      allocated: 720000,
      spent: 340000,
      department: "Library",
      status: "on-track",
      lastUpdated: "1 hour ago",
    },
  ];

  const trustMetrics = [
    { score: 94, label: "Data Authenticity", description: "All transactions are logged securely with internal verification protocols." },
    { score: 87, label: "Transparency Score", description: "Public accessibility and documentation completeness." },
    { score: 91, label: "Audit Compliance", description: "Adherence to financial reporting standards." },
    { score: 96, label: "Real-time Accuracy", description: "Data freshness and update frequency." },
  ];

  const spentPercentage = (liveData.totalSpent / liveData.totalBudget) * 100;
  const allocatedPercentage = (liveData.totalAllocated / liveData.totalBudget) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Financial Dashboard</h1>
          <p className="text-slate-600">Real-time overview of institutional fund allocation and spending.</p>
          <div className="flex items-center space-x-2 mt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-500">Last updated: {liveData.lastUpdate}</span>
          </div>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Budget</p>
                <p className="text-2xl font-bold text-slate-900">
                  ₹{liveData.totalBudget.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Allocated</p>
                <p className="text-2xl font-bold text-blue-600">
                  ₹{liveData.totalAllocated.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-slate-500">{allocatedPercentage.toFixed(1)}% of budget</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Spent</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{liveData.totalSpent.toLocaleString("en-IN")}
                </p>
                <p className="text-xs text-slate-500">{spentPercentage.toFixed(1)}% of budget</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Active Projects</p>
                <p className="text-2xl font-bold text-purple-600">{liveData.activeProjects}</p>
                <p className="text-xs text-slate-500">Currently funded</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Trust & Transparency */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Trust & Transparency Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustMetrics.map((metric, idx) => (
              <TrustIndicator key={idx} score={metric.score} label={metric.label} description={metric.description} />
            ))}
          </div>
        </div>

        {/* Budget Overview */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Budget Overview</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                <span className="text-sm text-slate-600">Allocated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-slate-600">Spent</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-900">Overall Budget Utilization</h3>
              <span className="text-sm text-slate-600">
                ₹{(liveData.totalBudget - liveData.totalSpent).toLocaleString("en-IN")} remaining
              </span>
            </div>

            <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
              <div className="relative h-4 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${allocatedPercentage}%` }} />
                <div className="bg-green-500 h-full absolute top-0 left-0 transition-all duration-500" style={{ width: `${spentPercentage}%` }} />
              </div>
            </div>

            <div className="flex justify-between text-sm text-slate-600">
              <span>Allocated: {allocatedPercentage.toFixed(1)}%</span>
              <span>Spent: {spentPercentage.toFixed(1)}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetData.map((budget, i) => (
              <BudgetCard key={i} {...budget} />
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {[
              { type: "expense", amount: 15000, description: "IT Equipment Purchase", department: "Technology", time: "2 hours ago" },
              { type: "allocation", amount: 50000, description: "Research Grant Allocation", department: "Research", time: "4 hours ago" },
              { type: "expense", amount: 8500, description: "Facility Maintenance", department: "Operations", time: "6 hours ago" },
              { type: "expense", amount: 3200, description: "Office Supplies", department: "Administration", time: "8 hours ago" },
              { type: "allocation", amount: 25000, description: "Student Program Funding", department: "Student Affairs", time: "1 day ago" },
            ].map((transaction, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.type === "expense" ? "bg-red-100" : "bg-blue-100"}`}>
                    {transaction.type === "expense" ? (
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{transaction.description}</p>
                    <p className="text-sm text-slate-600">{transaction.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${transaction.type === "expense" ? "text-red-600" : "text-blue-600"}`}>
                    {transaction.type === "expense" ? "-" : "+"}₹{transaction.amount.toLocaleString("en-IN")}
                  </p>
                  <p className="text-sm text-slate-500">{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
