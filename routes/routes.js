const express = require("express");
const transactionRouter = express.Router();
const TransactionModel = require("../models/TransactionModel");
const {
  getTransactions,
  createTransaction,
  deleteTransaction,
  alterTransaction,
} = require("../services/transactionService");

//BUSCA TRANSAÇÕES COM BASE EM ANO E MES INFORMADOS POR PARAMETRO NO FORMATO yyyy-MM
transactionRouter.get("/:period", async (req, res, next) => {
  try {
    const periodo = req.params.period;
    const ret = await getTransactions(periodo);

    if (!ret) throw new Error("Erro - Dados não encontrados");
    res.send(JSON.stringify(ret));
  } catch (error) {
    next(error);
  }
});

//CRIA UMA NOVA TRANSACTION COM BASE NO JSON ENVIADO EM BODY
transactionRouter.post("/", async (req, res, next) => {
  try {
    const transction = await createTransaction(req.body);
    res.send(JSON.stringify({ transction }));
  } catch (error) {
    next(error);
  }
});

//ALTERA DADOS DE UMA TRANSACTION
transactionRouter.put("/:id", async (req, res, next) => {
  try {
    const transaction = req.body;
    const id = req.params.id;

    const ret = await alterTransaction(id, transaction);

    if (!ret) throw new Error("Erro - Transaction não encontrada");

    res.send(JSON.stringify(ret));
  } catch (error) {
    next(error);
  }
});

//DELETA UMA TRANSACTION
transactionRouter.delete("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    const ret = await deleteTransaction(id);
    if (!ret) throw new Error("Erro - Transaction não encontrada");
    await res.end();
  } catch (error) {
    next(error);
  }
});

//TRATAMENTO DE ERRO GENERICO
transactionRouter.use((err, req, res, next) => {
  console.log(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(500).send({ error: err.message });
});

module.exports = transactionRouter;
