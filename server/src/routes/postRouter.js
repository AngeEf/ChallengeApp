const express = require('express');
const {
  Community, Member, User, Post,
} = require('../../db/models');

const router = express.Router();

// GET ALL POSTS FOR COMMUNITY
router.get('/:community/posts', async (req, res) => {
  const posts = await Post.findAll({
    where: { community_id: req.params.community },
    include: [{ model: User }],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.json(posts);
});

// CREATE NEW POST
router.post('/:community/posts/new', async (req, res) => {
  const newPost = await Post.create({
    community_id: req.body.id, user_id: req.session.user.id, task: false, content: req.body.input,
  });
  res.json(newPost);
});

// CREATE NEW ===ADMIN!!!!!!!!!! POST
router.post('/:community/posts/newAdmin', async (req, res) => {
  const newPost = await Post.create({
    community_id: req.body.id, user_id: req.session.user.id, task: true, content: req.body.input,
  });
  res.json(newPost);
});

// GET POST FOR ADMIN
router.get('/:community/posts/newAdmin', async (req, res) => {
  const adminPost = await Post.findAll({
    where: { task: true, community_id: req.params.community },
    order: [
      ['createdAt', 'DESC'],
    ],
    limit: 1,
  });
  return res.json(adminPost);
});

module.exports = router;
