const express = require('express');
const bcrypt = require('bcrypt');
const fileMiddleware = require('../middleware/middleware');
const { User, Member, Community } = require('../../db/models');

const router = express.Router();

router.post('/signup', fileMiddleware.single('avatar'), async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  console.log(req.file);
  if (name && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { name, password: await bcrypt.hash(password, 10), image: req.file.path },
      });
      if (created) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });
      if (await bcrypt.compare(password, user.password)) {
        const sessionUser = JSON.parse(JSON.stringify(user));
        delete sessionUser.hashpass;
        req.session.user = sessionUser;
        return res.json(sessionUser);
      }
      return res.sendStatus(401);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/check', (req, res) => {
  if (req.session.user.id) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('sid').sendStatus(200);
});

router.get('/findname/:id', async (req, res) => {
  const name = await User.findOne({ where: { id: req.params.id } });
  console.log(name);
  res.json(name);
});

// CHECK MEMBER
router.get('/check/:community/member', async (req, res) => {
  if (req.session.user) {
    try {
      const member = await Member.findOne({
        where: { user_id: req.session.user.id, community_id: req.params.community },
      });
      console.log('MEMBER FROM BACK--->', member);
      console.log('REQ SESSION USER ID--->', req.session.user.id);
      console.log('REQ PARAMS COMM--->', req.params.community);
      if (member !== null) {
        return res.json(true);
      }
      return res.json(false);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(401);
});

// CHECK ADMIN
router.get('/check/:id/admin', async (req, res) => {
  if (req.session.user) {
    try {
      const admin = await User.findOne({
        include: [{ model: Community, where: { id: req.params.id } }],
      });
      if (admin.id === req.session.user.id) {
        return res.json(admin);
      }
      return res.json(false);
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(401);
});

// GET ADMIN OF COMMUNITY
// router.get('/:id/admin', async (req, res) => {
//   const { id } = req.params;
//   const admin = await Community.findOne({
//     where: { id },
//   });
//   res.json(admin);
// });
router.get('/:id/admin', async (req, res) => {
  const { id } = req.params;
  const admin = await User.findOne({
    include: [{ model: Community, where: { id } }],
  });
  res.json(admin);
});

router.delete('/check/:community/member', async (req, res) => {
  await Member.destroy({
    where: { user_id: req.session.user.id, community_id: Number(req.params.community) },
  });
  res.sendStatus(200);
});

module.exports = router;
