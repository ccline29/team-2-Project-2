const User = require('./User');
const Expenses = require('./expenses');

User.hasMany(Expenses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Expenses.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Expenses };