const User = require('./User');
const Expenses = require('./Expenses');

User.hasMany(Expenses, {
    foreignKey: 'user_id'
});

Expenses.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Expenses };