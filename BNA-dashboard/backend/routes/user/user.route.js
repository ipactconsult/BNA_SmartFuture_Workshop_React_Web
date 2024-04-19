const router = require("express").Router();
const _g = require("../../controllers/user/user.getinfo.controller");
const _p = require("../../controllers/user/user.updateinfo.controller");

const authenticateToken = require("../../middleware/auth.middleware");
router.get("/get", authenticateToken, _g.getInfo);
router.put("/put/:id", authenticateToken, _p.updateInfo);

module.exports = router;
