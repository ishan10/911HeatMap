var express = require('express');
var router = express.Router();
var mongourl = "mongodb://localhost:27017/PotholeData";
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/globe', function(req, res, next) {
    res.render('globe');
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.get('/register', function(req, res, next) {
    res.render('register');
});

module.exports = router;
