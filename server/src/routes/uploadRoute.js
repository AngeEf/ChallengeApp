/* eslint-disable no-empty */
const { Router } = require('express');
const path = require('path');
const fileMiddleware = require('../middleware/middleware');
const { User } = require('../../db/models');

const router = Router();

router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    console.log('req.file.path------', req.file.path, 'finish-----');
    const edit = await User.update({
      image: req.file.path,
    }, { where: { id: req.session.user.id } });
    res.json(edit);
  } catch (error) {
    console.log(error, '---');
  }
});
router.get('/takephoto/:link', async (req, res) => {
  console.log('shit', (path.join(__dirname, `../../${req.params.link}`)));
  res.sendFile(path.join(__dirname, `../../${req.params.link}`));
});

module.exports = router;
