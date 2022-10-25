const express = require('express');
const path = require('path');
const {
  Community, Member, User, Post,
} = require('../../db/models');
const fileMiddleware = require('../middleware/middleware');

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
router.post('/:community/posts/new', fileMiddleware.single('avatar'), async (req, res) => {
  const { input } = req.body;
  const { id } = req.body;
  try {
    const edit = await Post.create({
      community_id: id, user_id: req.session.user.id, task: false, content: input, image: req.file.path,
    });
    res.json(edit);
  } catch (error) {
    console.log(error, '---');
  }
});

// CREATE NEW ===ADMIN!!!!!!!!!! POST
router.post('/:community/posts/newAdmin', fileMiddleware.single('avatar'), async (req, res) => {
  const { input } = req.body;
  const { id } = req.body;
  const newPost = await Post.create({
    community_id: id, user_id: req.session.user.id, task: true, content: input, image: req.file.path,
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
