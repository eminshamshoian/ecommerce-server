const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Import routes
const userRoutes = require('./routes/user');

// App
const app = express();

// Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected'));

// General middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes middleware
app.use('/api', userRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
