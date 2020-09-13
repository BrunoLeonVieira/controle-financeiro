import React from "react";
import TransactionCard from "./TransactionCard";

export default function TransactionsList({ transactions, onDeleted }) {
  const handleDeleted = (id) => {
    onDeleted(id);
  };
  return (
    <div className="row">
      {transactions.map((transaction, index) => {
        return (
          <TransactionCard
            infoTransaction={transaction}
            key={index}
            onDeleted={handleDeleted}
          />
        );
      })}
    </div>
  );
}
