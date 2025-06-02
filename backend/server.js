const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // ✅ Load environment variables

const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRoutes);

// Debug logs to trace execution
console.log("Starting server...");

// ✅ Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    }); 
  })
  .catch(err => {
    console.error("❌ Failed to connect to MongoDB:", err);
  });
