var express = require('express');
var router = express.Router();

var burgers = require("../models/burger.js")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Eat-Da-Burger!' });
// });

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject,{ title: 'Eat-Da-Burger!' });
  });
});

module.exports = router;
