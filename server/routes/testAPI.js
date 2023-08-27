const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res)=>{
    res.send('API is working properly')
});

module.exports = router;
