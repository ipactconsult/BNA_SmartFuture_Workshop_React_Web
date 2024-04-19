const router = require("express").Router();
const _f = require("../../controllers/auth/auth.forget-password.controller");

router.post("/forget-password", _f.forgetPassword);
module.exports = router;
