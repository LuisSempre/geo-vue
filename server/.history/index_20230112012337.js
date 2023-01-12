const express = require("express");
const cors = require("cors");
const axios = require("axios");
const url = require("url");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get("/api/search", async (req, res) => {
  try {
    const params = new URLSearchParams({
      access_token: process.env.API_KEY,
      ...url.parse(req.url, true).query,
    });
    console.log(params);
    const query = req.params.query;
    const results = await axios(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?${params}`,
    );
    const data = results.data;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`app has started on port: ${PORT}`));
