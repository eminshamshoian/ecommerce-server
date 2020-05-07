const User = require('../models/user');
const jwt = require('jsonwebtoken'); // Generate signed token
const expressJwt = require('express-jwt'); // Authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');

// Sign up new user
exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: errorHandler(err)
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    // Find user based on email
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Credentials do not exist. Please Signup.'
            });
        }
        // If user is found make sure the email and password match
        // Create authenticate method in user model
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }

        // Generate a signed token with user id and secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        // Persist the token as 't' in cookie with expired date
        res.cookie('t', token, { exprire: new Date() + 9999 });

        // Return response with user and token to client
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
    });
};
