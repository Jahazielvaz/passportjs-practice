const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({extended: false});
const path = require('path');
const passport = require('passport');


const app = express();
app.set('view engine', 'ejs');
app.use(urlEncoded);
app.use(express.static(path.join(__dirname, 'statics')));

let restaurantsRoute = require('./server/routes/restaurantsRoute.js')(app);


module.exports = app;
