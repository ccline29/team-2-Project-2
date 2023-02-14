const sequelize = require('../config/connection');
const { User } = require('../models')
const { Expenses } = require('../models')

const userData = require('./userData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    
    });

    // await Expenses.bulkCreate()

    process.exit(0);
}

seedDatabase();