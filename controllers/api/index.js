const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expensesRoutes = require('./expensesRoutes');

// route /api/users and
router.use('/users', userRoutes);
// route /api/expenses
router.use('/expenses', expensesRoutes);
// middleware to handle requests to unknown routes
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;