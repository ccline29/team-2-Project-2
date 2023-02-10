const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Event, User, Category } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/',  (req, res) => {
	try {
			console.log('/api/user-routes was hit');
    res.render('user', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;