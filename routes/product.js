const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const {
    create,
    productById,
    read,
    remove,
    update,
    list
} = require('../controllers/product');
const { userById } = require('../controllers/user');

// Product routes
router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);
router.delete(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    remove
);
router.put(
    '/product/:productId/:userId',
    requireSignin,
    isAuth,
    isAdmin,
    update
);
router.get('/products', list);

// Router params
router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
