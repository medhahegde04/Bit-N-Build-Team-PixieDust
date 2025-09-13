import React, { useState } from "react";
import FlowChart from "../components/FlowChart";
import LineGraph from "../components/LineGraph";

export default function BudgetFlow() {
  const [selectedView, setSelectedView] = useState("overview");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [visualizationType, setVisualizationType] = useState("tree");

  const formatCurrency = (value) => `₹${value.toLocaleString("en-IN")}`;

  const flowData = {
    id: "total-budget",
    label: "Total Institution Budget",
    amount: 15750000,
    type: "budget",
    color: "#dbeafe",
    children: [
      {
        id: "academic-dept",
        label: "Academic Department",
        amount: 6500000,
        type: "department",
        color: "#bfdbfe",
        children: [
          {
            id: "education-tech",
            label: "Education Technology",
            amount: 2500000,
            type: "project",
            color: "#93c5fd",
            children: [
              { id: "vendor-techcorp", label: "TechCorp Solutions", amount: 1200000, type: "vendor", color: "#60a5fa" },
              { id: "vendor-edusoft", label: "EduSoft Systems", amount: 800000, type: "vendor", color: "#60a5fa" },
              { id: "vendor-learning", label: "Learning Innovations", amount: 500000, type: "vendor", color: "#60a5fa" }
            ]
          },
          {
            id: "research-grants",
            label: "Research Grants",
            amount: 4000000,
            type: "project",
            color: "#93c5fd",
            children: [
              { id: "vendor-research1", label: "Advanced Research Lab", amount: 1500000, type: "vendor", color: "#60a5fa" },
              { id: "vendor-research2", label: "Scientific Equipment Co", amount: 1200000, type: "vendor", color: "#60a5fa" },
              { id: "vendor-research3", label: "Data Analytics Inc", amount: 1300000, type: "vendor", color: "#60a5fa" }
            ]
          }
        ]
      },
      {
        id: "operations-dept",
        label: "Operations Department",
        amount: 4200000,
        type: "department",
        color: "#d1fae5",
        children: [
          {
            id: "infrastructure",
            label: "Infrastructure Maintenance",
            amount: 3200000,
            type: "project",
            color: "#a7f3d0",
            children: [
              { id: "vendor-construction", label: "BuildRight Construction", amount: 1800000, type: "vendor", color: "#6ee7b7" },
              { id: "vendor-electrical", label: "ElectroTech Services", amount: 900000, type: "vendor", color: "#6ee7b7" },
              { id: "vendor-plumbing", label: "PlumbPro Solutions", amount: 500000, type: "vendor", color: "#6ee7b7" }
            ]
          },
          {
            id: "security",
            label: "Campus Security",
            amount: 1000000,
            type: "project",
            color: "#a7f3d0",
            children: [
              { id: "vendor-security", label: "SecureGuard Systems", amount: 600000, type: "vendor", color: "#6ee7b7" },
              { id: "vendor-surveillance", label: "WatchTech Solutions", amount: 400000, type: "vendor", color: "#6ee7b7" }
            ]
          }
        ]
      },
      {
        id: "student-services",
        label: "Student Services",
        amount: 2800000,
        type: "department",
        color: "#fef3c7",
        children: [
          {
            id: "student-programs",
            label: "Student Programs",
            amount: 1800000,
            type: "project",
            color: "#fde68a",
            children: [
              { id: "vendor-events", label: "EventPro Management", amount: 800000, type: "vendor", color: "#fcd34d" },
              { id: "vendor-catering", label: "Campus Catering Co", amount: 600000, type: "vendor", color: "#fcd34d" },
              { id: "vendor-activities", label: "Activity Coordinators", amount: 400000, type: "vendor", color: "#fcd34d" }
            ]
          },
          {
            id: "library-resources",
            label: "Library Resources",
            amount: 1000000,
            type: "project",
            color: "#fde68a",
            children: [
              { id: "vendor-books", label: "Academic Publishers", amount: 600000, type: "vendor", color: "#fcd34d" },
              { id: "vendor-digital", label: "Digital Library Systems", amount: 400000, type: "vendor", color: "#fcd34d" }
            ]
          }
        ]
      },
      {
        id: "administration",
        label: "Administration",
        amount: 2250000,
        type: "department",
        color: "#e0e7ff",
        children: [
          {
            id: "hr-operations",
            label: "HR Operations",
            amount: 1200000,
            type: "project",
            color: "#c7d2fe",
            children: [
              { id: "vendor-hr-software", label: "HR Management Systems", amount: 700000, type: "vendor", color: "#a5b4fc" },
              { id: "vendor-recruitment", label: "Recruitment Services", amount: 500000, type: "vendor", color: "#a5b4fc" }
            ]
          },
          {
            id: "finance-operations",
            label: "Finance Operations",
            amount: 1050000,
            type: "project",
            color: "#c7d2fe",
            children: [
              { id: "vendor-accounting", label: "Accounting Software Co", amount: 600000, type: "vendor", color: "#a5b4fc" },
              { id: "vendor-consulting", label: "Finance Consulting Group", amount: 450000, type: "vendor", color: "#a5b4fc" }
            ]
          }
        ]
      }
    ]
  };

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "academic-dept", name: "Academic Department" },
    { id: "operations-dept", name: "Operations Department" },
    { id: "student-services", name: "Student Services" },
    { id: "administration", name: "Administration" }
  ];

  const getProcessedData = () => {
    let data = selectedDepartment === "all" ? flowData : flowData.children.find(d => d.id === selectedDepartment) || flowData;

    if (selectedView === "overview") {
      return {
        id: "total-budget",
        label: "Total Institution Budget",
        amount: flowData.amount,
        type: "budget",
        color: "#dbeafe",
        children: selectedDepartment === "all" ? flowData.children.map(d => ({
          id: d.id,
          label: d.label,
          amount: d.amount,
          type: "department",
          color: d.color
        })) : [{
          id: data.id,
          label: data.label,
          amount: data.amount,
          type: "department",
          color: data.color
        }]
      };
    } else {
      return data;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Budget Flow Visualization</h1>
          <p className="text-slate-600">Interactive visualization showing fund flow from budget to departments, projects, and vendors.w</p>
        </div>

        {/* Controls */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
            {/* View Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">View Type</label>
              <div className="flex space-x-2">
                <button onClick={() => setSelectedView("overview")} className={`px-4 py-2 rounded-md text-sm font-medium ${selectedView === "overview" ? "bg-brand-medium text-white" : "bg-slate-100 text-slate-700"}`}>Overview</button>
                <button onClick={() => setSelectedView("detailed")} className={`px-4 py-2 rounded-md text-sm font-medium ${selectedView === "detailed" ? "bg-brand-medium text-white" : "bg-slate-100 text-slate-700"}`}>Detailed</button>
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Department Filter</label>
              <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-medium focus:border-brand-navy">
                {departments.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
              </select>
            </div>

            {/* Visualization Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Visualization Type</label>
              <div className="flex space-x-2">
                <button onClick={() => setVisualizationType("tree")} className={`px-4 py-2 rounded-md text-sm font-medium ${visualizationType === "tree" ? "bg-brand-medium text-white" : "bg-slate-100 text-slate-700"}`}>Tree</button>
                <button onClick={() => setVisualizationType("line")} className={`px-4 py-2 rounded-md text-sm font-medium ${visualizationType === "line" ? "bg-brand-medium text-white" : "bg-slate-100 text-slate-700"}`}>Line Graph</button>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 mb-8">
          {visualizationType === "tree" ? (
            <FlowChart data={getProcessedData()} />
          ) : (
            <LineGraph data={getProcessedData()} />
          )}
        </div>
      </div>
    </div>
  );
}
