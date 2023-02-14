const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Expenses } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/',  (req, res) => {
	try {
    //const query = `SELECT * FROM Expenses`, where, userName = '${userName}' AND userEmail = '${userEmail}';

    res.render('visuals', {});

			console.log('/api/user-routes was hit');
    res.render('user', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;