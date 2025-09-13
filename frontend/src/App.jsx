import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import BudgetFlow from "./pages/BudgetFlow"; 
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budget-flow" element={<BudgetFlow />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
