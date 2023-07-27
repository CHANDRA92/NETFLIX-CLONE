require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require("./routes/UserRoutes");
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DB Connection Successful");
})
.catch((err) => {
  console.error("Error connecting to the database:", err.message);
});

app.use("/api/user", userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
