const express = require('express');
const { Game, Challenge } = require('../../db/models');

const router = express.Router();
const dataprogress = '{"1":false, "2":false, "3":false, "4":false, "5":false, "6":false, "7":false, "8":false, "9":false, "10":false, "11":false, "12": false, "13":false, "14":false, "15":false, "16":false, "17":false, "18":false, "19":false, "20":false, "21":false, "22":false, "23":false, "24":false, "25":false, "26":false, "27":false, "28":false, "29":false, "30":false}';
// CREATE NEW CHALLENGE GAME
router.post('/create', async (req, res) => {
  // console.log(req.body, req.session.user.id);
  const challenge_id = req.body.datas;
  // const { user_id } = req.session.user.id;
  const newGame = await Game.create({
    user_id: req.session.user.id, challenge_id, progress: dataprogress, status: true,
  });
  res.json(newGame);
});

// ALL GAMES USER
router.get('/all', async (req, res) => {
  // console.log('.....', req.body);
  const allUserGame = await Game.findAll({
    where: { user_id: req.session.user.id },
    order: [['createdAt', 'DESC']],
    attributes: ['id', 'user_id', 'challenge_id', 'progress', 'status', 'createdAt', 'updatedAt'],
    include: [{ model: Challenge, attrigute: ['title'] }],
    // include: [{ model: Challenge, attribute: 'title' }],
  });
  // console.log(JSON.parse(JSON.stringify(allUserGame)));
  return res.json(allUserGame);
});

// ALL ACTIVE GAME PLAYERS
router.get('/players/:id', async (req, res) => {
  // console.log(req.params);
  const activePlayers = await Game.findAll({
    where: { challenge_id: req.params.id, status: true },
  });
  return res.json(activePlayers);
});

// FIND ACTIVE GAME OF USER
router.get('/player/:id', async (req, res) => {
  const activePlayer = await Game.findAll({
    where: { user_id: req.session.user.id, challenge_id: req.params.id, status: true },
    // include: [{ model: Challenge, attrigute: ['title'] }],
  });
  // console.log(activePlayer);
  return res.json(activePlayer);
});

// CHANGE PROGRESS USER
router.patch('/progress/:id', async (req, res) => {
  // console.log(req.body);
  // console.log('11111111111111111', req.body.obj);
  const { obj } = req.body;
  const data = JSON.stringify(obj);
  const update = await Game.update(
    { progress: data },
    { where: { id: req.params.id } },
  );
  return res.json(update);
});
module.exports = router;
