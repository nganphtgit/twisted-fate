const express = require('express');
const router = new express.Router();

const resultRouter = require('./result');

router.use('/result', resultRouter);

module.exports = router;