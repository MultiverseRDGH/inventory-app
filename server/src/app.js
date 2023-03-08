const express = require("express");
const app = express();
const { dataCreate } = require("../db/dataCreate");
dataCreate();
const itemsRoutes = require("../Routes/item")
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Running Express Server on localhost://${PORT}`);
});

app.use("/items",itemsRoutes)