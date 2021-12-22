const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/main', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [{
            // model: Product
        }], 
      });

      const users = userData.map((user) => user.get({ plain: true }));

      res.render('homepage', { 
        users, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/profile', withAuth, async (req, res) => {

    try {
      const userData = await User.findByPk(req.session.user_id, {
        // attributes: { exclude: ['password'] },
        // include: [{ model: Project }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/main');
      return;
    }
  
    res.render('login');
});

router.get('/newuser', (req,res)=>{
    res.render('newAccount')
})

module.exports = router;