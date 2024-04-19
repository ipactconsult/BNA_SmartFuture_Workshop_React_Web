const router = require("express").Router();
const _r = require("../../controllers/auth/auth.reset-password.controller");

router.post("/verify-code", _r.verifyCode);
router.put("/reset-password/:code", _r.resetPassword);
module.exports = router;
