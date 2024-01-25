const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/", userRouter);

app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
