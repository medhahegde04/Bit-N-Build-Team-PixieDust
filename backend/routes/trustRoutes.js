import express from "express";
import TrustMetric from "../models/TrustMetric.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const metrics = await TrustMetric.find();
    res.json(metrics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const metric = new TrustMetric(req.body);
  try {
    const newMetric = await metric.save();
    res.status(201).json(newMetric);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
