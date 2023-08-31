var express = require('express');
var router = express.Router();

const user = require('../controllers/user.resume.controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/userResume', user.create)

module.exports = router;
