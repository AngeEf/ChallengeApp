const express = require('express');
const { Community, Member, User } = require('../../db/models');

const router = express.Router();

// GET ALL COMMUNITIES
router.get('/communities', async (req, res) => {
  const communities = await Community.findAll();
  return res.json(communities);
});

// CREATE COMMUNITY
router.post('/communities', async (req, res) => {
  const { input } = req.body;
  const { admin } = req.session.user.id;
  const newCommunity = await Community.create({
    input, admin,
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
  const members = await Member.findAll({
    where: { community_id: id },
    include: [{ model: User }],
  });
  res.json(members);
});

// JOIN COMMUNITY
router.post('/communities/:id/join', async (req, res) => {
  const { community_id } = req.params;
  const { user_id } = req.session.user.id;
  const newMember = await Member.create({
    community_id, user_id,
  });
  res.json(newMember);
});

// LEAVE COMMUNITY
router.delete('/communities/:id/join', async (req, res) => {
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
