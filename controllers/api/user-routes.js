const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Event, User, Category } = require('../models');
const withAuth = require('../utils/auth');

  

module.exports = router;