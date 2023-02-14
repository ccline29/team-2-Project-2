const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const connection = require('../config/connection');


router.get('/', (req, res) => {
  try {
    res.render('login', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', (req, res) => {
    try {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const query = `SELECT * FROM user WHERE email = '${userEmail}' AND password = '${userPassword}'`;
        if (userEmail && userPassword) {
            //compare userEmail and userPassword to database
        if (query) { 
      res.render('homepage', {});
        } else {res.render ('login', {})}
    }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/signup', (req, withAuth, res) => {
    try {
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        // const query = `SELECT * FROM user WHERE email = '${userEmail}' AND password = '${userPassword}'`;
        // add validation
        const userName = req.body.name;
        if (userName && userEmail && userPassword) {
      res.render('login', {});
        } else {res.render ('signup', {})}
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;