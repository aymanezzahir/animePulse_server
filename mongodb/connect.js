const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGOODB_URL)
    .then(() => console.log("DataBase Connected"))
    .catch((err) => console.error(err));
};
module.exports = connectDB;
