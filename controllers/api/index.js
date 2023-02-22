const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expensesRoutes = require('./api/expensesRoutes');

// route /api/users and
router.use('/users', userRoutes);
// route /api/expenses
router.use('/expenses', expensesRoutes);

module.exports = router;