const express = require('express');
const router = express.Router();

const operations = require('./api/operations');

router.use('/api/operations', operations);

module.exports = router;
