const express = require('express');
const cors = require('cors');
const app = express();

// ==== SETTINGS ==== //
app.set('port', process.env.PORT || 4000)

// ==== MIDDLEWARES ==== //
app.use(cors());
app.use(express.json()); 

// ==== ROUTES ==== //
const userRouter = require('./routes/users')

app.use('/api/users', userRouter);

module.exports = app;