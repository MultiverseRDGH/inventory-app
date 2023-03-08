const express = require("express");
const app = express();
const { dataCreate } = require("../db/dataCreate");
dataCreate();

const PORT = 3000;
app.get("/", () => {
  console.log(`Running Express Server on ${PORT}`);
});
