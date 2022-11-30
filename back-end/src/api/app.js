// import bodyParser from 'body-parser';
const express = require('express');

const loginRouter = require('./Routes/loginRouter');
const errorMiddleware = require('./Middlewares/errorMiddleware');

const app = express();

// app.use(bodyParser.json());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', loginRouter);

app.use(errorMiddleware);

module.exports = app;
