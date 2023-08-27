var express = require('express');
var router = express.Router();

const user = require('../controllers/user.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user', user.create)

module.exports = router;
