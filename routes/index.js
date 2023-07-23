var express = require('express');
var router = express.Router();

const nameList = [
{'id':1, 'name': 'Angelo', 'email':'email1' },
{'id':2, 'name': 'Angelo2','email':'email2'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub:'ABC', names: nameList });
});

module.exports = router;
