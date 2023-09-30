const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OperationSchema = new Schema({
  name: String,
  devComp: Date,
  uatStart: Date,
  uatComp: Date,
  implement: Date,
});

const Operation = mongoose.model('Operation', OperationSchema);

module.exports = Operation;
