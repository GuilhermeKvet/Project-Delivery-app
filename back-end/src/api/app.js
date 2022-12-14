// import bodyParser from 'body-parser';
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const { loginRoute, productsRoute, userRoute } = require('./Routes');
const salesRoute = require('./Routes/salesRoute');
const errorMiddleware = require('./Middlewares/errorMiddleware');

const app = express();

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/', loginRoute);
app.use('/customer/products', productsRoute);
app.use('/customer/orders', salesRoute);
app.use('/seller/orders', salesRoute);
app.use('/', userRoute);

app.use(errorMiddleware);

module.exports = app;
