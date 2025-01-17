const fs = require("fs");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
console.log(data);
app.use(cors()); // Allowing access to all clients
// Simple GET endpoint
app.get("/api", (req, res) => {
  res.json({
    status: "success",
    data: data,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
