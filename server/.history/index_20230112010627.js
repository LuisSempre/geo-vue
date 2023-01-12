const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/api/search", (req, res) => {
  try {
    const query = req.params.query;
    console.log(query);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`app has started on port: ${PORT}`));
