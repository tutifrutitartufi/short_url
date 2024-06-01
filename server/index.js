const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const db = require("./db");
const { get_short_url_and_increase_rating } = require("./models/url");
const url = require("./routes/url");

const app = express();
const apiPort = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.all("/:slug", async (req, res) => {
  const slug = req.params.slug;
  const url = await get_short_url_and_increase_rating(slug);
  let domain = url?.domain;
  if (!url?.domain.indexOf("https://") && !url?.domain.indexOf("http://")) {
    domain = "https://" + url?.domain;
  }
  res.redirect(domain);
});

app.use("/api", url);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
