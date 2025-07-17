const express = require('express');
const path = require('path');
const router = express.Router();    

// app 3 - gifty searcher app
const appPath = path.join(__dirname, "../../website_frontend/giphy_searcher/build");
router.use("/giphy_searcher", express.static(appPath));

router.get("/giphy_searcher/{*any}", (req, res) => {
  res.sendFile(path.join(appPath, "index.html"));
});

module.exports = router;