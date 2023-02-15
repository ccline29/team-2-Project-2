const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expenses extends Model {}

Expenses.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        expense_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pay_to: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        payment_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
),
{
hooks: {
    beforeCreate: (newExpensesData) => {
      return newExpensesData;
    },
},
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'expenses',
};

module.exports = Expenses;