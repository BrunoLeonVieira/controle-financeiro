const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require("../models/TransactionModel");

async function getTransactions(period) {
  try {
    const condition = { yearMonth: period };
    return await TransactionModel.find(condition);
  } catch (error) {
    throw error;
  }
}

async function createTransaction(transaction) {
  try {
    const data = new TransactionModel(transaction);
    return await data.save();
  } catch (error) {
    throw error;
  }
}

async function deleteTransaction(id) {
  try {
    return await TransactionModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
}

async function alterTransaction(id, transaction) {
  try {
    return await TransactionModel.findByIdAndUpdate(id, transaction);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getTransactions,
  createTransaction,
  deleteTransaction,
  alterTransaction,
};
