const express = require('express');
const path = require('path');
const router = express.Router();

// app 2 - weather app
const appPath = path.join(__dirname, "../../website_frontend/weather-app/build");
router.use("/weather_app", express.static(appPath));

router.get("/weather_app/{*any}", (req, res) => {
  res.sendFile(path.join(appPath, "index.html"));
});

module.exports = router;