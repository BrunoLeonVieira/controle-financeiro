import React from "react";
import Action from "./Action";
import { formatMonetaryValue } from "../../Helpers/formatHelpers";

export default function TransactionCard({ infoTransaction, onDeleted }) {
  const handleActionClick = (id, type) => {
    switch (type) {
      case "delete":
        onDeleted(id);
        break;

      default:
        break;
    }
  };

  return (
    <div
      style={infoTransaction.type === "-" ? style.badGrade : style.goodGrade}
      className="card-panel col s12 "
    >
      <div className="row">
        <div className="col s12 m1 l1 center">
          <span className="blue-text text-darken-2">{infoTransaction.day}</span>
        </div>

        <div className="col s12 m10 l10">
          <div>{infoTransaction.category}</div>
          <div>{infoTransaction.description}</div>
          <div>{formatMonetaryValue(infoTransaction.value)}</div>
        </div>
        <div className="col s12 m1 l1 right-align">
          <Action type="edit" />
          <Action
            type="delete"
            onActionClick={handleActionClick}
            id={infoTransaction._id}
          />
        </div>
      </div>
    </div>
  );
}

const style = {
  goodGrade: {
    border: "0.01rem solid",
    borderColor: "#a5d6a7",
  },
  badGrade: {
    border: "0.01rem solid",
    borderColor: "#ef9a9a",
  },
};
