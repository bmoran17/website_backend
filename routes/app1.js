const express = require('express');
const path = require('path');
const router = express.Router();

// app 1 - hometracker
const appPath = path.join(__dirname, "../../website_frontend/home-tracker/build");
router.use("/home_tracker", express.static(appPath));

router.get("/home_tracker/{*any}", (req, res) => {
  res.sendFile(path.join(appPath, "index.html"));
});

module.exports = router