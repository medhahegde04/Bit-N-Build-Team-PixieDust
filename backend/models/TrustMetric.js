import mongoose from "mongoose";

const trustMetricSchema = new mongoose.Schema({
  score: Number,
  label: String,
  description: String
});

export default mongoose.model("TrustMetric", trustMetricSchema);
