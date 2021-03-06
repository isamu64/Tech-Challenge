//Imports
const express = require('express');
const router = express.Router();
const membersController = require('./controller/membersController')

//Routes
router.get('/', membersController.home);
router.post('/members', membersController.addMember)


//Export Router
module.exports = router;