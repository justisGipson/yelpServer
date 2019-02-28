require('dotenv').config()
var express = require('express');
var app = express();
var search = require('./controller/searchcontroller');
var bodyParser = require('body-parser');

app.use(require('./middleware/headers'));
app.use('/search', search);

app.use(bodyParser.json());
app.listen(process.env.PORT, function(){
    console.log(`App is listening on ${process.env.PORT}`);
})