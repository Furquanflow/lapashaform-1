const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const path = require("path");

require("dotenv").config();
const app = express();
app.use(express.json());
const _dirName = path.dirname("");
const buildPath = path.join(_dirName, "../client/build");
app.use(express.static(buildPath));
app.use(
  cors({
    origin: "*",
  })
);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(buildPath, "index.html"));
// });

// app.use(
//   cors({
//     origin: "http://localhost:3000", // Replace with your React app's address
//   })
// );

const PORT = process.env.port;
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));
