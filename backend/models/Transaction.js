import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: String,
  amount: Number,
  description: String,
  department: String,
  time: String
});

export default mongoose.model("Transaction", transactionSchema);
