const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expensesRoutes = require('/Users/chriscline/bootcamp/team-2-Project-2/controllers/api/expenseRoutes.js');

// route /api/users and
router.use('/users', userRoutes);
// route /api/expenses
router.use('/expenses', expensesRoutes);

module.exports = router;