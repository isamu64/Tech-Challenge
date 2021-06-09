//Imports modules
require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const app = express();
const port = process.env.PORT || 3000;


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