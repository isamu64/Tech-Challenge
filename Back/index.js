//Imports modules
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Middleware to recover POST request 
app.use(express.urlencoded({
    extended : true
}));


//Connect the router
app.use(router);


//Launch the server
app.listen(port, () => {
    console.log(`Je suis lancé sur http://localhost:${port}`);
});