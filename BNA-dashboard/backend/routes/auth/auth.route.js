const router = require('express').Router();
const _r = require('../../controllers/auth/auth.signup.controller');
const _l = require('../../controllers/auth/auth.signin.controller');

router.post('/register', _r.register);
router.post('/login', _l.login);

module.exports = router;