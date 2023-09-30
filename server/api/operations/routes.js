const express = require('express');
const router = express.Router();
const { catchErrorHandler } = require('../../utils/errorHandler');
const { createNewOperation, insertOperation } = require('./controller');

router.post('/', async (req, res) => {
  let operation = req.body;
  operation = await createNewOperation(operation);
  response = await insertOperation(operation);

  res.status(200).json(response);
});
//.catch((e) => catchErrorHandler(e, req, res, next));

module.exports = router;
