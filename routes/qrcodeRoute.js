const express = require("express");
const router = express.Router();
const {
  qrControllerGet,
  qrControllerPost,
} = require("../controllers/qrController");
router.get("/", qrControllerGet);
router.post("/", qrControllerPost);
module.exports = router;
