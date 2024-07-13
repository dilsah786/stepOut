const express = require("express");
const cors = require("cors");
const {userController } = require("./Controller/user.routes");
const { authentication } = require("./Auth_Middleware/authentication");
const { connection } = require("./db");
const {adminRouter } = require("./Controller/admin.routes.js");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "Irctc Api is working fine" });
});

app.use("/", userController);

app.use(authentication);

app.use("/admin", adminRouter);

app.listen(process.env.port || 8080, async () => {
  try {
    await connection;
    console.log("App is connected to mongoDB database irctc");
  } catch (err) {
    console.log(err);
  }
  console.log("App is running on port 8080");
});
