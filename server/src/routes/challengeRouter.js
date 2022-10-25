const express = require('express');
const { Challenge } = require('../../db/models');

const router = express.Router();

// GET ALL CHALLENGES
router.get('/all', async (req, res) => {
  const challenges = await Challenge.findAll();
  res.json(challenges);
  // return console.log(res.json(challenges));
});

// GET CHALLENGE BY CATEGORY
// router.get('/all/:category', async (req, res) => {
//   const { category } = req.params;
//   const challengesByCategory = await Challenge.findAll({
//     where: { category },
//   });
//   return res.json(challengesByCategory);
// });

// GET ONE CHALLENGE
router.get('/challenge/:id', async (req, res) => {
  const { id } = req.params;
  // console.log('111111111111', id);
  const challenge = await Challenge.findOne({
    where: { id },
  });
  res.json(challenge);
});

// GET CHALLENGE BY CATEGORY LIMIT 6
// router.get('/:category', async (req, res) => {
//   const { category } = req.params;
//   console.log('type123', category);
//   const challengesByCategory = await Challenge.findAll({
//     where: { category },
//   });
//   console.log('.........', challengesByCategory);
//   res.json(challengesByCategory);
// });

module.exports = router;
// { limit: 3 }
