import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // <-- your backend URL
  timeout: 5000,
});

export const getOverview = () => API.get("/dashboard/overview");
export const getTrustMetrics = () => API.get("/dashboard/trust");
export const getBudgets = () => API.get("/dashboard/budgets");
