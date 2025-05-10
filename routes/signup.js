var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('página signup de usuário');
});

module.exports = router;