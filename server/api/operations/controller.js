const Operation = require('./model');

const createNewOperation = async (operation) => {
  const { name, devComp, uatStart, uatComp, implement } = operation;
  return new Operation({ name, devComp, uatStart, uatComp, implement });
};

const insertOperation = async (operation) => {
  return operation.save();
};

module.exports = {
  createNewOperation,
  insertOperation,
};
