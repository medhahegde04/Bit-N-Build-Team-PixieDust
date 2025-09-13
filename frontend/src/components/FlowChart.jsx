import React, { useState } from "react";

function FlowChart({ data, currency = "INR", conversionRate = 0.012 }) {
  const [selectedNode, setSelectedNode] = useState(null);

  const formatCurrency = (value) => {
    if (!value) return "";
    if (currency === "USD") {
      return `$${(value * conversionRate).toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
    }
    return `₹${Number(value).toLocaleString("en-IN")}`;
  };

  const renderNode = (node) => {
    const isSelected = selectedNode?.id === node.id;
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className="flex flex-col items-center">
        <div
          onClick={() => setSelectedNode(isSelected ? null : node)}
          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 text-center max-w-xs ${
            isSelected
              ? "border-blue-500 shadow-lg scale-105"
              : "border-slate-200 hover:border-blue-300 hover:shadow-md"
          }`}
          style={{ backgroundColor: node.color || "#ffffff" }}
        >
          <h4 className="font-semibold text-slate-900 mb-1">
            {node.label || node.name}
          </h4>
          <p className="text-sm text-slate-600">
            {node.amount ? formatCurrency(node.amount) : ""}
          </p>
          <span className="text-xs text-slate-500 capitalize">{node.type || ""}</span>

          {isSelected && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          )}
        </div>

        {hasChildren && (
          <>
            <div className="w-px h-8 bg-slate-300 my-2" />
            <div className="flex space-x-8">
              {node.children.map((child) => renderNode(child))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 overflow-x-auto">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          Institution's Fund Flow Visualization
        </h3>
        <p className="text-sm text-slate-600">
          Click on any node to highlight it and see details.
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-max py-8">{renderNode(data)}</div>
      </div>

      {selectedNode && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-2">
            Selected Node Details
          </h4>
          <p className="text-sm text-blue-700"><strong>ID:</strong> {selectedNode.id}</p>
          {selectedNode.label && (
            <p className="text-sm text-blue-700"><strong>Label:</strong> {selectedNode.label}</p>
          )}
          {selectedNode.amount && (
            <p className="text-sm text-blue-700">
              <strong>Amount:</strong> {formatCurrency(selectedNode.amount)}
            </p>
          )}
          {selectedNode.type && (
            <p className="text-sm text-blue-700"><strong>Type:</strong> {selectedNode.type}</p>
          )}
          {selectedNode.children && selectedNode.children.length > 0 && (
            <p className="text-sm text-blue-700">
              <strong>Children:</strong> {selectedNode.children.length}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default FlowChart;
