var express = require('express');
var router = express.Router();

router.get('/user/:userId', function(req, res) {
    res.send('página users')
})

module.exports = router;
