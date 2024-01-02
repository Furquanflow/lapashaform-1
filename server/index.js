const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./router/Router");
const path = require("path");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://3.144.216.200:8000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8000;
const IP_ADDRESS = process.env.IP_ADDRESS || '0.0.0.0';
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const _dirName = path.dirname("");
const buildPath = path.resolve(_dirName, "../client/build");
app.use(express.static(buildPath));
app.get("*/", (req, res) => {
  const indexPath = path.resolve(buildPath, "index.html");
  res.sendFile(indexPath);
});

app.listen(PORT, () => console.log(`Port Running at ${PORT}`));
