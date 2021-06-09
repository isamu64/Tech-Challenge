//Imports
const express = require('express');
const router = express.Router();
const membersController = require('./controller/membersController')

//Routes
router.get('/members', membersController.home);
router.post('/members', membersController.create)


//Export Router
module.exports = router;