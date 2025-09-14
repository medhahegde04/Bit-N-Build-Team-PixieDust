import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  allocated: Number,
  spent: Number,
  department: String,
  status: String,
  lastUpdated: String
});

export default mongoose.model("Budget", budgetSchema);
