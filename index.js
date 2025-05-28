const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Backend-beast is activated");
});

app.get("/status", (req, res) => {
  const currentTime = new Date().toString();
  return res.json({ status: "ok", time: currentTime });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
