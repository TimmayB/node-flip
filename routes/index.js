var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/flip', function(req, res) {
  var flipInt = Math.round(Math.random())
  var flip = flipInt >= 1 ? 'Heads' : 'Tails'
  res.render('index', { flip });
});

module.exports = router;
