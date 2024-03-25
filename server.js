const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./mongodb/connect");
const AuthMidlleware = require("./midllewareAuth")
const register = require("./routes/user/user")

require("dotenv").config();
app.use(express.json());
app.use(cors());

// when you finish development enable this middleware
// for protect server against attacks

// app.use(AuthMidlleware)

app.use("/user" ,register )

const PORT = process.env.PORT || 3500;

app.get("/", function (req, res) {
  res.send("<script>alert('hello wolrd')</script>");
});

app.listen(PORT, function () {
  connectDB();
  console.log("http://localhost:" + PORT);
});
