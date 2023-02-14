const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  try {
    res.render('homepage', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;



//var express = require('express');
//var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//  res.render('homepage');
// } catch (err) {
//  res.status(500).json(err);
// }
// });
// module.exports = router;

