import React, { useEffect, useState } from "react";
import FilterTransactions from "./components/header/FilterTransactions.js";
import TransactionsHeader from "./components/header/TransactionsHeader.js";
import TransactionsList from "./components/transaction_list/TransactionsList.js";
import * as api from "./api/apiService.js";
import ModalTransaction from "./components/modal/ModalTransaction.js";
import ButtonNewTransaction from "./components/header/ButtonNewTransaction.js";
import BoxMounth from "./components/navigator/BoxMounth.js";

export default function App() {
  const [trasactions, setTransactions] = useState([]);
  const [filteredtransactions, setFilteredTransactions] = useState([]);
  const [referenceMonth, setReferenceMonth] = useState("2020-05");
  const [filter, setFilter] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    const getTransactions = async () => {
      const allTransactions = await api.getAllTransactions(referenceMonth);

      setTransactions(allTransactions);
      setFilteredTransactions(allTransactions);
    };

    getTransactions();
  }, [referenceMonth]);

  const handlePersistDeleted = async (id) => {
    const isDeleted = await api.deleteTransaction(id);

    if (isDeleted) {
      console.log("Deletado");
      const newTransacions = filteredtransactions.filter((transaction) => {
        return transaction._id !== id;
      });
      setFilteredTransactions(newTransacions);
    }
  };

  const handleFiltered = (filter) => {
    const filterTransactions = trasactions.filter((transaction) => {
      return transaction.description
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    setFilteredTransactions(filterTransactions);
    setFilter(filter);
  };

  const handleButtonClick = () => {
    setIsOpenModal(true);
  };

  const handleClosedModal = () => {
    setIsOpenModal(false);
  };

  const handleSelectedMonth = (month) => {
    setReferenceMonth(month);
  };

  return (
    <div className="container">
      <TransactionsHeader transactions={filteredtransactions} />
      <div className="row">
        <ButtonNewTransaction onChangeClick={handleButtonClick} />
        <FilterTransactions onChangeFilter={handleFiltered} filter={filter} />
      </div>
      <BoxMounth period={referenceMonth} onSelected={handleSelectedMonth} />
      <TransactionsList
        transactions={filteredtransactions}
        onDeleted={handlePersistDeleted}
      />
      {isOpenModal && <ModalTransaction onClosedModal={handleClosedModal} />}
    </div>
  );
}
