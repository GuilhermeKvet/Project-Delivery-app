// import bodyParser from 'body-parser';
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const { loginRoute, registerRoute, customerRoute } = require('./Routes');
const salesRoute = require('./Routes/salesRoute')
const errorMiddleware = require('./Middlewares/errorMiddleware');

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/customer/products', customerRoute);
app.use('/customer/orders',salesRoute);

app.use(errorMiddleware);

module.exports = app;
