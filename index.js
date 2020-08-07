'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 10000;
const app = express();

const routes = require('./routes/product');
routes(app)
require('./model/db')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())







app.listen(PORT, console.log(`App is Running at PORT=${PORT}`));