const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const path = require('path');


const app = express();
app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use(express.static(path.join(__dirname, 'statics')));

const restaurantsRoute = require('./server/routes/restaurantsRoute.js')(app);


module.exports = app;
