const express = require("express");
const path = require("path");
const app = express();
const port = 15000;

const publicPath = path.join(__dirname, "..", "client/build");
app.use(express.static(publicPath));
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const { MongoClient } = require("mongodb");

// const listDatabases = async (client) => {
//   const databasesList = await client.db().admin().listDatabases();
//   console.log("Databases:");
//   databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
// };

// const main = async () => {
//   const uri = "mongodb://0.0.0.0:27017";
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     await listDatabases(client);
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
//   // const db = client.db('work-org-db');
//   // const collection = db.collection('op-dates');
//   // const result = await collection.insertOne({ hello: 'world' });
//   // console.log(result);
//   // client.close();
// };

// main().catch(console.error);
