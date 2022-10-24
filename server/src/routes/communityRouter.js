const express = require('express');
const { Community, Member, User } = require('../../db/models');

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
router.post('/communities', async (req, res) => {
  const {
    title, subtitle, description, category,
  } = req.body.input;
  const newCommunity = await Community.create({
    title, subtitle, description, category, admin_id: req.session.user.id,
  });
  res.json(newCommunity);
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

// GET MEMBERS OF COMMUNITY
router.get('/communities/:id/members', async (req, res) => {
  const { id } = req.params;
  const members = await User.findAll({
    include: [{ model: Community, where: { id } }],
  });
  res.json(members);
});

// JOIN COMMUNITY
router.post('/communities/:id/join', async (req, res) => {
  const { id } = req.params;
  const newMember = await Member.create({
    community_id: id, user_id: req.session.user.id,
  });
  res.json(newMember);
});

// LEAVE COMMUNITY
router.delete('/communities/:id/', async (req, res) => {
  const { community_id } = req.params;
  const { user_id } = req.session.user.id;
  const newMember = await Member.destroy({
    where: {
      community_id, user_id,
    },
  });
  res.json(newMember);
});


module.exports = router;
