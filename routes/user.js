const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

// User routes
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});
router.param('userId', userById);

module.exports = router;
