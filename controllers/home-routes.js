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

router.get('/login', (req, res) => {
	try {
		res.render('login', {});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/signup', (req, res) => {
	try {
		res.render('login', {});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
