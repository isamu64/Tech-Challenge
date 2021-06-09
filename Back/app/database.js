//Import .env
require('dotenv').config();


//Import PG module
const { Client } = require('pg');


//Create a client,a link between JS and BDD
const client = new Client(process.env.PG_URL);


//Connect the client
client.connect();


//Export the client
module.exports = client;