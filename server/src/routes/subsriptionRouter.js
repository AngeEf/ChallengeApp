const express = require('express');
const {
  Community, Post, Member, User,
} = require('../../db/models');

const router = express.Router();

// ALL SUBSCRIPTION USER
router.get('/all', async (req, res) => {
  // console.log('.....', req.body);
  // const a = await Member.findAll({
  //   // attributes: ['id'],
  //   where: { user_id: 2 },
  //   include: [
  //     { model: Community },
  //   ],
  // });
  // const a = await Community.findAll({
  //   attributes: ['title', 'id'],
  //   include: [{
  //     model: User,
  //     attributes: ['id'],
  //     where: { id: 2 },
  //     include: [{
  //       model: Post, where: { task: true }, limit: 1, order: [['createdAt', 'DESC']],
  //     }],
  //   }],
  // });

  const a = await Community.findAll({
    attributes: ['title', 'id'],
    include: [{
      model: User,
      attributes: ['id'],
      where: { id: 2 },
    }, {
      model: Post, where: { task: true }, limit: 1, order: [['createdAt', 'DESC']],
    }],
  });
  // const a = await Post.findAll({
  //   where: { task: true },
  //   order: [['createdAt', 'DESC']],
  //   include: [{ model: Community, where: {} }],
  // });
  console.log(JSON.parse(JSON.stringify(a)));
  const result = a.map((el) => el.Posts).filter((el) => el.length > 0).flat();

  res.json(result);
});

module.exports = router;

// const a = await Members.findAll({
//   where: { user_id: req.session.user.id },
//   include: [
//     { model: Community, include: [{ model: Post }] },
//   ],
// });
