const express = require('express');
const router = express.Router();

// Import controllers
const {
    signup,
    signin,
    signout,
    requireSignin
} = require('../controllers/auth');
const { userSignupValidator } = require('../validator/index');

// Auth routes
router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;
