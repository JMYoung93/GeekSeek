const router = require('express').Router();
const { User,Questions } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('splashpage');
});

router.get('/main', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [{
          model: Questions
      }], 
    });

    const users = userData.map((user) => user.get({ plain: true }));

  res.render('main'
  , { 
    users 
  //   logged_in: req.session.logged_in 
  }
  );

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {

  // try {
  //   const userData = await User.findByPk(req.session.user_id, {
  //     // attributes: { exclude: ['password'] },
  //     // include: [{ model: Project }],
  //   });

  //   const user = userData.get({ plain: true });

    res.render('userProfile'
    // , {
    //   ...user,
    //   logged_in: true
    // }
    );
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/main');
    return;
  }
  // console.log("test")
  res.render('login');
});

router.get('/newuser', (req, res) => {
  // console.log("test")
  res.render('newuser')
})

module.exports = router;