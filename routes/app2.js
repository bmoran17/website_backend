const express = require('express');
const path = require('path');
const router = express.Router();

// app 2
const appPath = path.join(__dirname, "../../website_frontend/app2/build");
router.use("/app2", express.static(appPath));

router.get("/app2/{*any}", (req, res) => {
  res.sendFile(path.join(appPath, "index.html"));
});

module.exports = router;