const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db'); 
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// middleware
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/goals', require('./routes/goalRoutes'));

// error handler - overwrites default error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}.`));