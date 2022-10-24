const express = require('express');
const { Challenge, Community } = require('../../db/models');

const router = express.Router();

// GET CHALLENGE BY CATEGORY LIMIT 6
router.get('/challenge/:category', async (req, res) => {
  const { category } = req.params;
  const challengesByCategory = await Challenge.findAll({
    where: { category }, limit: 6,
  });
  res.json(challengesByCategory);
});

router.get('/community/:category', async (req, res) => {
  const { category } = req.params;
  const communityByCategory = await Community.findAll({
    where: { category }, limit: 6,
  });
  res.json(communityByCategory);
});

module.exports = router;
