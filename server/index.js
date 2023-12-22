const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(express.json());
// app.use(
//   cors({
//     origin: "*"
//   })
// );
app.use(cors())
app.use(express.urlencoded({ extended: true, limit: "200mb" }));
const PORT = process.env.port;
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

// const _dirName = path.dirname("");
// const buildPath = path.resolve(_dirName, "../client/build");
// app.use(express.static(buildPath));
// app.get("*/", (req, res) => {
//   const indexPath = path.resolve(buildPath, "index.html");
//   res.sendFile(indexPath);
// });

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));
