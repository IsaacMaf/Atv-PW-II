var express = require('express');
var router = express.Router();

router.get('/about', function(req, res, next) {
  res.send('página "sobre"');
});

module.exports = router;