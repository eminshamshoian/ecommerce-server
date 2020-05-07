const express = require('express');
const router = express.Router();

// Import controllers
const { signup } = require('../controllers/user');
const { userSignupValidator } = require('../validator/index');

router.post('/signup', userSignupValidator, signup);

module.exports = router;
