const express = require("express");

const Url = require("../controllers/url");

const router = express.Router();

router.post("/urls", Url.createUrl);
router.delete("/urls/:id", Url.deleteUrl);
router.get("/urls/:id", Url.getUrlById);
router.get("/urls", Url.getUrls);

module.exports = router;
