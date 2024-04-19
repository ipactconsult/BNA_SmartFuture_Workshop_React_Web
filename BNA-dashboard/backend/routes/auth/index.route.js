const router = require("express").Router();
const auth = require("./auth.route.js");
const forget = require("./forget.route.js");
const reset = require("./reset.route.js");
router.use("/auth", auth);
router.use("/forget", forget);
router.use("/reset", reset);

module.exports = router;
