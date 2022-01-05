const router = require('express').Router();
const { User,Questions } = require('../../models');

router.post('/newuser', async (req, res) => {
  console.log(req.body)
  // console.log(req.session.user_id)
  // const userData = await User.findAll()
  // const usersHelper = userData.map((user) => user.get({ plain: true }));

  try {
    const questionData = await Questions.create({
      ...req.body
    });

    res.status(200).json(questionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;