const router = require('express').Router();
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');
const expenseRoutes = require('./expense-routes');

router.use('/', loginRoutes);
router.use('/users', userRoutes);
router.use('/expenseForm', expenseRoutes);

module.exports = router;
