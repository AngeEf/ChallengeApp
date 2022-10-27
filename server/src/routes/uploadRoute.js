/* eslint-disable no-empty */
const { Router } = require('express');
const path = require('path');
const fileMiddleware = require('../middleware/middleware');
const { User } = require('../../db/models');

const router = Router();

router.post('/upload/:id', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    console.log('req.file.path------', req.file.path, 'finish-----');
    const edit = await User.update({
      image: req.file.path,
      name: req.body.name,
    }, { where: { id: req.session.user.id } });
    const findImg = await User.findByPk(req.session.user.id);
    console.log(edit, 'sdsda Edsssssssit');

    console.log(findImg, 'sdsda find');
    res.json(findImg);
  } catch (error) {
    console.log(error, '---');
  }
});
router.get('/takepath', async (req, res) => {
  const user = await User.findOne({ attributes: ['image', 'name'], where: { id: req.session.user.id } });
  console.log(user, 'ussssss');
  res.json(user);
});

module.exports = router;
