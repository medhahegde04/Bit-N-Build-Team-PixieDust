
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());



mongoose.connect(
  process.env.MONGODB_URI,
  
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log(' Connected to MongoDB Atlas'))
.catch((err) => console.error(' MongoDB connection error:', err));



const transactionSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  category: String,
  subcategory: String,
  date: {
    type: Date,
    default: Date.now,
  },
});


const Transaction = mongoose.model('Transaction', transactionSchema, 'project');



app.post('/api/add-transaction', async (req, res) => {
  try {
    const newTransaction = new Transaction(req.body);
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction added', data: newTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error saving transaction', error });
  }
});


app.get('/api/data', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
});


app.get('/api/aggregated-data', async (req, res) => {
  try {
    const transactions = await Transaction.find();

    const grouped = {};

    transactions.forEach(txn => {
      const cat = txn.category;
      const sub = txn.subcategory;

      if (!grouped[cat]) grouped[cat] = {};
      if (!grouped[cat][sub]) grouped[cat][sub] = 0;

      grouped[cat][sub] += txn.amount;
    });

    const result = {
      name: "All Transactions",
      children: Object.entries(grouped).map(([category, subs]) => ({
        name: category,
        children: Object.entries(subs).map(([sub, value]) => ({
          name: sub,
          value
        }))
      }))
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error aggregating data', error });
  }
});



app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
