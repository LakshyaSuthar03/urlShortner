const express = require("express");
const router = express.Router();
const {
  urlControllerPost,
  urlControllerGet,
} = require("../controllers/urlController");
router.post("/", urlControllerPost);
router.get("/", urlControllerGet);
module.exports = router;
