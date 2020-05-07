const express = require('express');
const router = express.Router();

// Import controllers
const { sayHi } = require('../controllers/user');

router.get('/', sayHi);

module.exports = router;
