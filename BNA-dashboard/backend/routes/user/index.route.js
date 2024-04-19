const router = require("express").Router();
const user = require("./user.route.js");
router.use("/user", user);
module.exports = router;
