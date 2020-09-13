import React, { useEffect, useState } from "react";
import { formatMonetaryValue } from "../../Helpers/formatHelpers";

export default function TransactionsHeader({ transactions }) {
  const [sumRevenue, setSumRevenue] = useState(0);
  const [sumExpenses, setSumExpenses] = useState(0);
  const [sumReleases, setSumReleases] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const sum_re = transactions.reduce((acc, cur) => {
      if (cur.type === "+") {
        return (acc += cur.value);
      } else {
        return acc;
      }
    }, 0);

    setSumRevenue(sum_re);

    const sum_ex = transactions.reduce((acc, cur) => {
      if (cur.type === "-") {
        return (acc += cur.value);
      } else {
        return acc;
      }
    }, 0);

    setSumExpenses(sum_ex);

    setBalance(sum_re - sum_ex);

    setSumReleases(transactions.length);
  }, [transactions]);

  return (
    <div>
      <div className="card row">
        <div className="col s3 l3">Lançamentos: {sumReleases}</div>
        <div className="col s3 l3">
          Receita: {formatMonetaryValue(sumRevenue)}
        </div>
        <div className="col s3 l3">
          Despesa: {formatMonetaryValue(sumExpenses)}
        </div>
        <div className="col s3 l3">Saldo: {formatMonetaryValue(balance)}</div>
      </div>
    </div>
  );
}
