const express = require('express');
const router = express.Router();
const authenticateFirebaseUser = require('../middleware/authenticate')

const user = require('../controllers/user.controller')

router.post('/createUser', authenticateFirebaseUser, user.findOne);



module.exports = router