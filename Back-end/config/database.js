const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("DB connection Successful");
  }
});
