const express = require('express');
const router = express.Router();
const auth = require("../controllers/AuthController");

router.get('/', auth.home);

router.get('/signup2', auth.register);
router.post('/register', auth.doRegister);

router.get('/login', auth.login);
router.post('/login', auth.doLogin);

router.get('/logout', auth.logout);

module.exports = router;