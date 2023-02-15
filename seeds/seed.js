const sequelize = require('../config/connection');
const { User, Expenses } = require('../models')

const userData = require('./userData.json')
const newExpensesData = require('./userExpenses.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    await Expenses.bulkCreate(newExpensesData, {
        individualHooks: true,
        returning: true,
    });
    process.exit(0);
}

seedDatabase();