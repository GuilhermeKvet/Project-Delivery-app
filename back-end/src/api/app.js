// import bodyParser from 'body-parser';
const express = require('express');
require('express-async-errors');
const { loginRouter } = require('./Routes');
const errorMiddleware = require('./Middlewares/errorMiddleware');

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
