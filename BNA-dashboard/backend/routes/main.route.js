const router = require("express").Router();
const index_auth = require("./auth/index.route");
const index_user = require("./user/index.route");
const index_virement = require("./virement/index.route");
router.use("/api", [index_auth, index_user, index_virement]);
module.exports = router;
