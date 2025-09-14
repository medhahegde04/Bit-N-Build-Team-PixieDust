import React, { useState, useEffect } from "react";
import BudgetCard from "../components/BudgetCard";
import TrustIndicator from "../components/TrustIndicator";

function Dashboard() {
  const [currency, setCurrency] = useState("INR");
  const conversionRate = 0.012;

  const [liveData, setLiveData] = useState(null);
  const [budgetData, setBudgetData] = useState([]);
  const [trustMetrics, setTrustMetrics] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const fetchDashboardData = async () => {
    try {
      const [budgetRes, trustRes, transactionRes] = await Promise.all([
        fetch("http://localhost:5000/api/budgets"),
        fetch("http://localhost:5000/api/trust"),
        fetch("http://localhost:5000/api/transactions")
      ]);

      if (!budgetRes.ok || !trustRes.ok || !transactionRes.ok) {
        throw new Error("API request failed");
      }

      const budgetJson = await budgetRes.json();
      const trustJson = await trustRes.json();
      const transactionJson = await transactionRes.json();

      setBudgetData(budgetJson);
      setTrustMetrics(trustJson);
      setTransactions(transactionJson);

      const totalBudget = budgetJson.reduce((sum, b) => sum + b.amount, 0);
      const totalSpent = budgetJson.reduce((sum, b) => sum + b.spent, 0);
      const totalAllocated = budgetJson.reduce((sum, b) => sum + b.allocated, 0);
      const activeProjects = budgetJson.length;

      setLiveData({
        totalBudget,
        totalSpent,
        totalAllocated,
        activeProjects,
        lastUpdate: new Date().toLocaleString(),
      });
    } catch (err) {
      console.error("Error loading dashboard data:", err.message);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 10000);
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) =>
    currency === "INR"
      ? `₹${amount.toLocaleString("en-IN")}`
      : `$${(amount * conversionRate).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

  if (!liveData) {
    return <p className="text-center mt-10 text-slate-600">Loading Dashboard...</p>;
  }

  const spentPercentage = (liveData.totalSpent / liveData.totalBudget) * 100;
  const allocatedPercentage = (liveData.totalAllocated / liveData.totalBudget) * 100;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Financial Dashboard</h1>
            <p className="text-slate-600">Real-time overview of institutional fund allocation and spending.</p>
            <div className="flex items-center space-x-2 mt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-500">Last updated: {liveData.lastUpdate}</span>
            </div>
          </div>
          <button
            onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
            className="px-4 py-2 bg-brand-medium text-white rounded-lg">
            Switch to {currency === "INR" ? "USD" : "INR"}
          </button>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Total Budget</p>
            <p className="text-2xl font-bold text-slate-900">{formatCurrency(liveData.totalBudget)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Total Allocated</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(liveData.totalAllocated)}</p>
            <p className="text-xs text-slate-500">{allocatedPercentage.toFixed(1)}% of budget</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Total Spent</p>
            <p className="text-2xl font-bold text-green-600">{formatCurrency(liveData.totalSpent)}</p>
            <p className="text-xs text-slate-500">{spentPercentage.toFixed(1)}% of budget</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Active Projects</p>
            <p className="text-2xl font-bold text-purple-600">{liveData.activeProjects}</p>
            <p className="text-xs text-slate-500">Currently funded</p>
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

          {/* Utilization Bar */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-900">Overall Budget Utilization</h3>
              <span className="text-sm text-slate-600">
                {formatCurrency(liveData.totalBudget - liveData.totalSpent)} remaining
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-4 mb-2 relative overflow-hidden">
              <div className="bg-blue-500 h-full transition-all duration-500" style={{ width: `${allocatedPercentage}%` }} />
              <div className="bg-green-500 h-full absolute top-0 left-0 transition-all duration-500" style={{ width: `${spentPercentage}%` }} />
            </div>
            <div className="flex justify-between text-sm text-slate-600">
              <span>Allocated: {allocatedPercentage.toFixed(1)}%</span>
              <span>Spent: {spentPercentage.toFixed(1)}%</span>
            </div>
          </div>

          {/* Budget Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetData.map((budget, i) => (
              <BudgetCard key={i} {...budget} currency={currency} conversionRate={conversionRate} />
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Transactions</h2>
          <div className="space-y-4">
            {transactions.map((transaction, idx) => (
              <div key={idx}
                className="flex items-center justify-between py-3 border-b border-slate-100 last:border-b-0">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      transaction.type === "expense" ? "bg-red-100" : "bg-blue-100"}`}>
                    {transaction.type === "expense" ? (
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{transaction.description}</p>
                    <p className="text-sm text-slate-600">{transaction.department}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      transaction.type === "expense" ? "text-red-600" : "text-blue-600"}`}>
                    {transaction.type === "expense" ? "-" : "+"}
                    {formatCurrency(transaction.amount)}
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
