const mongoose = require("mongoose");
const Transaction = require("./models/Transaction"); 

const mongoURI = "mongodb+srv://gnapikar29_db_user:jungkook97@fund-tracker.upxndhf.mongodb.net/?retryWrites=true&w=majority&appName=fund-tracker";

mongoose.connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    createDummyData();
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
    process.exit(1); 
  });


async function createDummyData() {
  try {
    const dummyTransactions = [
      {
        category: "IT Department",
        subCategory: "Software Licenses",
        amount: 200,
        description: "Purchased MS Office license",
        date: new Date()
      },
      {
        category: "IT Department",
        subCategory: "Software Licenses",
        amount: 500,
        description: "Renewed Adobe subscription",
        date: new Date()
      },
      {
        category: "IT Department",
        subCategory: "Software Licenses",
        amount: 300,
        description: "Bought antivirus software",
        date: new Date()
      }
    ];


    const existingTransactions = await Transaction.find({});
    if (existingTransactions.length === 0) {
      await Transaction.insertMany(dummyTransactions);
      console.log("Dummy transactions added!");
    } else {
      console.log("Dummy data already exists. Skipping insertion.");
    }
    
  } catch (err) {
    console.error("Error creating dummy data:", err);
  } finally {
  
    mongoose.disconnect();
    console.log("Disconnected from MongoDB.");
  }
}
