var express = require('express');
var router = express.Router();

router.post('/data', function(req, res, next) {
  res.send('página de data');
});

module.exports = router;