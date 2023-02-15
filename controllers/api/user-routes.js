const router = require('express').Router();
const db = require('../../config/connection');
const { Expenses } = require('../../models');
// withAuth is not needed in this file

// route /api/users returns currently logged in user
router.get('/', (req, res) => {
  // try {
  const user = User.findOne({
    where: {
      email: req.session.username,
    },
  })

  // 	const query = db.query('SELECT * FROM Expenses'); //where, userName = '${userName}' AND userEmail = '${userEmail}';
  // 	console.log('/api/user-routes was hit');
  // } catch (err) {
  // 	res.status(500).json(err);
  // }
  res.render('user', {});
});

router.post('/login', (req, withAuth, res) => {
  try {
    const user = User.findOne({
      where: {
        username: req.body.email,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
  console.log('Successful Login!');
});

router.post('/signup', (req, withAuth, res) => {
  try {
    const newUser = User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
  console.log('Successful Sign up!');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;