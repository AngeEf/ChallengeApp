/* eslint-disable no-empty */
const { Router } = require('express');
const fileMiddleware = require('../middleware/middleware');

const router = Router();

router.post('/upload', fileMiddleware.single, (req, res) => {
  try {
    if (req.file) {
      res.json(req.file);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
