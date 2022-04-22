const express = require('express');
const cors = require('cors')
var app = express();

// require('dotenv').config();

var routes = require('./routes/routes.js');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.use(cors({origin: "*"}))
app.use(express.json());
app.use('/api', routes);


app.listen(8080, function (req, res){
    console.log('listening on port 8080');
});