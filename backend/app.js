const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const countRouter = require('./routes/count');

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/count', countRouter);

app.use((req, res, next) => {
    res.status(404).json({
        code: 12,
        message: {
            description: "Recurso no encontrado"
        }
    })
});

module.exports = app;
