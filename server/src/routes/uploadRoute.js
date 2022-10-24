/* eslint-disable no-empty */
const { Router } = require('express');
const { where } = require('sequelize');
const fileMiddleware = require('../middleware/middleware');
const { User } = require('../../db/models');

const router = Router();

router.post('/upload', fileMiddleware.single('avatar'), async (req, res) => {
  try {
    // console.log(req.body.avatar[0].FileList);
    // console.log(req.file);
    // res.json(req.files);
    console.log('file------', req.file, 'finish-----');
    // console.log('path------', req.file, 'path fin-----');
    const edit = await User.update({
      image: req.file?.filename,
    }, { where: { id: req.session.user } });
    res.json(edit);
    // const edit = await User.update({
    //   image: req.body.image,
    // }, { where: { id: req.session.user.id } });
    // console.log(edit, 'edit');
    // res.json(edit);
    // console.log('----', res.json(req.file));
    // const back = await User.findOne({ where: { id: req.session.user.id } });
    // back.avatar = req.file.path;
    // edit.save();
    // res.json(edit);
    // res.send('Done');
  } catch (error) {
    console.log(error, '---');
  }
});

module.exports = router;
