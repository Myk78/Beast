const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Backend-beast is activated");
});

app.get("/status", (req, res) => {
  const currentTime = new Date().toString();
  return res.json({ status: "ok", time: currentTime });
});
app.get("/product", (req, res) => {
  return res.json([
    {
      id: 1,
      name: "Laptop",
      price: 1200,
    },
    {
      id: 2,
      name: "Headphones",
      price: 150,
    },
    {
      id: 3,
      name: "Keyboard",
      price: 80,
    },
  ]);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
