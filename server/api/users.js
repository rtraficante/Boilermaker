const router = require("express").Router();
const User = require("../db");

router.get("/", async (req, res) => {
  res.send("hello");
});

module.exports = router;
