const Operation = require('./model');

const createNewOperation = async (operation) => {
  const { name, devComp, uatStart, uatComp, implement } = operation;
  return new Operation({ name, devComp, uatStart, uatComp, implement });
};

const deleteAllOperations = async () => {
  return Operation.deleteMany({});
};

const getOperations = async () => {
  return Operation.find({});
};

const insertOperation = async (operation) => {
  return operation.save();
};

module.exports = {
  createNewOperation,
  deleteAllOperations,
  getOperations,
  insertOperation,
};
