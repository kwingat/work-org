// mongodb
//require("./config/db");

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("express").json;
const compression = require("compression");
const routes = require("./routes");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const publicPath = path.join(__dirname, "..", "client/build");
app.use(compression());
app.use(express.static(publicPath));
app.use(cors());
app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

process.on("SIGINT", () => {
  process.exit();
});

process.on("exist", () => {
  process.exit();
});
mongoose.set("strictQuery", false);
const main = async () => {
  const uri = "mongodb://0.0.0.0:27017/test";
  console.log("uri", uri);
  await mongoose.connect(uri);
};
main().catch(console.error);

module.exports = app;

// const listDatabases = async (client) => {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// };
