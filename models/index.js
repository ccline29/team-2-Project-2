const User = require('./User');
const Expenses = require('./expenses');

Expenses.hasOne(User, {
    foreignKey: 'user_id',
});

User.hasMany(Expenses, {
    foreignKey: 'user_id'
});

module.exports = { User, Expenses };