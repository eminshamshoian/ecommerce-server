const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { create, categoryById, read } = require('../controllers/category');
const { userById } = require('../controllers/user');

// Category routes
router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

// Router params
router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
