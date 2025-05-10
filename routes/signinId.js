var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const userId = req.params.userId;
    res.send(`
      Página users
      Bem vindo, user de número ${userId}!
    `);
});

module.exports = router;