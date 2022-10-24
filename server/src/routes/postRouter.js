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

module.exports = router;
