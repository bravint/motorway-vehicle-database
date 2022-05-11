require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const vehicleRouter = require('./routes/vehicles');
const errorHandler = require('./utils/middleware/errorHandler');
const { SERVER_STATUS } = require('./utils/config');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
app.use('/api/v1/vehicles', vehicleRouter);

// error handling middleware
app.use(errorHandler);

// catch all/test route
app.get('*', (req, res) => {
    res.send(SERVER_STATUS.HELLO);
});

app.listen(port, () => {
    console.log(`${SERVER_STATUS.STARTED}${port}`);
});
