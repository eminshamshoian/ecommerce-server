const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const {
    create,
    categoryById,
    read,
    update,
    remove,
    list
} = require('../controllers/category');
const { userById } = require('../controllers/user');

// Category routes
router.get('/category/:categoryId', read);
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);
router.put(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.delete(
    '/category/:categoryId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.get('/categories', list);

// Router params
router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
