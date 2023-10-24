var express = require('express');
var router = express.Router();
const token = process.env.GITHUB_TOKEN;

router.get('/', function(req, res, next) {
  const username = req.query.username;
  console.log(`username: ${username}`);
  res.render('index');
});

module.exports = router;
