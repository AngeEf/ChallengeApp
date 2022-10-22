/* eslint-disable no-empty */
const { Router } = require('express');
const fileMiddleware = require('../middleware/middleware');
const { User } = require('../../db/models');

const router = Router();

router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    // console.log(req.file);
    console.log(req.body);
    if (req.file) {
      const back = await User.findOne({ where: { id: req.session.user.id } });
      back.avatar = req.file.path;
      back.save();
      res.json(back);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
