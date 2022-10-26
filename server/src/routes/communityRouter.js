const express = require('express');
const path = require('path');
const { Community, Member, User } = require('../../db/models');
const fileMiddleware = require('../middleware/middleware');

const router = express.Router();

// GET ALL COMMUNITIES
router.get('/communities', async (req, res) => {
  const communities = await Community.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  return res.json(communities);
});

// CREATE COMMUNITY
router.post('/communities', fileMiddleware.single('avatar'), async (req, res) => {
  const newCommunity = await Community.create({
    title: req.body.title, subtitle: req.body.subtitle, description: req.body.description, category: req.body.category, admin_id: req.session.user.id, image: req.file?.path ? req.file?.path : null,
  });
  res.json(newCommunity);
});

router.post('/:community/posts/new', fileMiddleware.single('avatar'), async (req, res) => {
  const { input } = req.body;
  const { id } = req.body;
  try {
    const edit = await Community.create({
      community_id: id, user_id: req.session.user.id, task: false, content: input, image: req.file.path,
    });
    res.json(edit);
  } catch (error) {
    console.log(error, '---');
  }
});

// GET ONE COMMUNITY
router.get('/communities/:id', async (req, res) => {
  const { id } = req.params;
  const community = await Community.findOne({
    where: { id },
  });
  return res.json(community);
});

// UPDATE COMMUNITY
router.put('/communities/:id/update', async (req, res) => {
  const { id } = req.params;
  const { input } = req.body;
  const community = await Community.update(
    {
      title: input.title, subtitle: input.subtitle, description: input.description, category: input.category,
    },
    {
      where: { id },
    },
  );
  return res.json(community);
});

// COUNT COMMUNITY MEMBERS
router.get('/communities/:id/count', async (req, res) => {
  const { id } = req.params;
  const countMembers = await Member.count({
    where: { community_id: id },
  });
  return res.json(countMembers);
});

// GET COMMUNITIES BY CATEGORY
router.get('/communities/:category', async (req, res) => {
  const { category } = req.params;
  const communitiesByCategory = await Community.findAll({
    where: { category },
  });
  return res.json(communitiesByCategory);
});

// GET ADMIN OF COMMUNITY
router.get('/communities/:id/currAdmin', async (req, res) => {
  const { id } = req.params;
  const currAdmin = await User.findAll({
    include: [{ model: Community, where: { id } }],
  });
  res.json(currAdmin);
});

// JOIN COMMUNITY
router.post('/communities/:id/join', async (req, res) => {
  const { id } = req.params;
  const newMember = await Member.findOrCreate({
    where: { user_id: id },
    defaults: {
      community_id: id,
    },
  });
  res.json(newMember);
});

// LEAVE COMMUNITY
router.delete('/communities/:comm_id/', async (req, res) => {
  const { comm_id } = req.params;
  const { id } = req.session.user;
  const deleteMember = await Member.destroy({
    where: {
      community_id: comm_id, user_id: id,
    },
  });
  res.json(id);
});

module.exports = router;
