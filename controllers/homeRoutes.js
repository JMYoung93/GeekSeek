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
<<<<<<< HEAD

=======
    
>>>>>>> 8ef40434daa3a61eb1dc22c5a5047838de398f09
    // console.log(req.session.user_id)  
    const users = []
    const usersHelper = userData.map((user) => user.get({ plain: true }));
    for (let i = 0; i < usersHelper.length; i++) {
      if (usersHelper[i].id != req.session.user_id) {
        users.push(usersHelper[i])
      }
    }
    const myId = req.session.user_id
<<<<<<< HEAD
    console.log(users)
=======

>>>>>>> 8ef40434daa3a61eb1dc22c5a5047838de398f09
  res.render('main'
  , { 
    users, 
    myId 
  //   logged_in: req.session.logged_in 
  }
  );

  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile/:id', withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{
          model: Questions
      }], 
    });

    const users = userData.get({ plain: true });
    console.log(users)
    res.render('userProfile'
    , {
<<<<<<< HEAD
      ...users,
      logged_in: true
=======
      ...users
      // logged_in: true
>>>>>>> 8ef40434daa3a61eb1dc22c5a5047838de398f09
    }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/main');
    return;
  }
  
  res.render('login');
});

router.get('/newuser', (req, res) => {
  // console.log("test")
  res.render('newuser')
})

module.exports = router;