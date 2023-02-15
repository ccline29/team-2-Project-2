const router = require('express').Router();
const db = require('../../config/connection');
const { Expenses } = require('../../models');

// /api/users
router.get('/', (req, res) => {
	// console.log('button hit');

	try {
		res.render('expenseForm', {});
		// const query = db.query('SELECT * FROM Expenses');
		//where, userName = '${userName}' AND userEmail = '${userEmail}';

		console.log('/api/user-routes was hit');
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
