require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', (req, res) => {
    res.send('Hello Motorway!');
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
