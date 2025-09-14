import mongoose from "mongoose";
import dotenv from "dotenv";
import Budget from "./models/Budget.js";
import Transaction from "./models/Transaction.js";
import TrustMetric from "./models/TrustMetric.js";

dotenv.config();

const budgets = [
  { title: "Education Technology", amount: 2500000, allocated: 2400000, spent: 1850000, department: "IT Department", status: "on-track", lastUpdated: "2 hours ago" },
  { title: "Infrastructure Maintenance", amount: 3200000, allocated: 3100000, spent: 2950000, department: "Facilities", status: "warning", lastUpdated: "1 hour ago" },
  { title: "Student Services", amount: 1800000, allocated: 1750000, spent: 1200000, department: "Student Affairs", status: "on-track", lastUpdated: "30 minutes ago" },
  { title: "Research Grants", amount: 4200000, allocated: 4000000, spent: 2100000, department: "Research Office", status: "on-track", lastUpdated: "45 minutes ago" },
  { title: "Campus Security", amount: 950000, allocated: 920000, spent: 980000, department: "Security", status: "over-budget", lastUpdated: "15 minutes ago" },
  { title: "Library Resources", amount: 750000, allocated: 720000, spent: 340000, department: "Library", status: "on-track", lastUpdated: "1 hour ago" },
];

const transactions = [
  { type: "expense", amount: 15000, description: "IT Equipment Purchase", department: "Technology", time: "2 hours ago" },
  { type: "allocation", amount: 50000, description: "Research Grant Allocation", department: "Research", time: "4 hours ago" },
  { type: "expense", amount: 8500, description: "Facility Maintenance", department: "Operations", time: "6 hours ago" },
  { type: "expense", amount: 3200, description: "Office Supplies", department: "Administration", time: "8 hours ago" },
  { type: "allocation", amount: 25000, description: "Student Program Funding", department: "Student Affairs", time: "1 day ago" },
];

const trustMetrics = [
  { score: 94, label: "Data Authenticity", description: "All transactions are logged securely with internal verification protocols." },
  { score: 87, label: "Transparency Score", description: "Public accessibility and documentation completeness." },
  { score: 91, label: "Audit Compliance", description: "Adherence to financial reporting standards." },
  { score: 96, label: "Real-time Accuracy", description: "Data freshness and update frequency." },
];

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Budget.deleteMany({});
    await Transaction.deleteMany({});
    await TrustMetric.deleteMany({});

    await Budget.insertMany(budgets);
    await Transaction.insertMany(transactions);
    await TrustMetric.insertMany(trustMetrics);

    console.log("Database seeded!");
    mongoose.disconnect();
  })
  .catch(err => console.log(err));
