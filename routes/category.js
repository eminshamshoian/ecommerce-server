const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { create } = require('../controllers/category');
const { userById } = require('../controllers/user');

// Category routes
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.param('userId', userById);

module.exports = router;
