const router = require('express').Router();
const loginRoutes = require('./login-routes');
const userRoutes = require('./user-routes');

router.use('/', loginRoutes);
router.use('/users', userRoutes);

module.exports = router;