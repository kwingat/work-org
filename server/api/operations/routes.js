const express = require('express');
const router = express.Router();
const { catchErrorHandler } = require('../../utils/errorHandler');
const {
  createNewOperation,
  deleteAllOperations,
  getOperations,
  insertOperation,
} = require('./controller');

router.delete('/', async (req, res) => {
  await deleteAllOperations();
  res.status(200).json({ message: 'All operations deleted' });
});

router.get('/', async (req, res) => {
  let operations = await getOperations();
  res.status(200).json(operations);
});

router.post('/', async (req, res) => {
  let operation = req.body;
  operation = await createNewOperation(operation);
  operation = await insertOperation(operation);

  res.status(200).json(operation);
});

module.exports = router;
