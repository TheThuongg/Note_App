const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/UserController');
const auth = require('../app/middleware/auth')

// Register User
router.post('/register', usersController.register );
// Login User
router.post('/login', usersController.login );
// verify Token
router.get('/verify', usersController.verifiedToken);





module.exports = router;
