const express = require('express');
const router = express.Router();

// Import controllers
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');

// Import controllers
const { userById } = require('../controllers/user');

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

// User routes
router.param('userId', userById);

module.exports = router;
