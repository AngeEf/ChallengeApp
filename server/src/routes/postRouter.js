const express = require('express');
const {
  Community, Member, User, Post,
} = require('../../db/models');

const router = express.Router();

// GET ALL POSTS FOR COMMUNITY
router.get('/posts', async (req, res) => {
  const { community_id } = req.params;
  const posts = await Post.findAll({
    where: { community_id },
  });
});

// CREATE NEW POST
router.post('/posts/new', async (req, res) => {
  const { input } = req.body;
  const { author } = req.session.user.id;
  const newPost = await Post.create({
    input, author,
  });
  res.json(newPost);
});

module.exports = router;
