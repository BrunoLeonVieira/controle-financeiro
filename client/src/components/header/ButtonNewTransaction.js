import React from "react";

export default function ButtonNewTransaction({ onChangeClick }) {
  const handleClick = () => {
    onChangeClick();
  };
  return (
    <div>
      <div className="col s2 l2">
        <a className="waves-effect waves-light btn" onClick={handleClick}>
          <i className="material-icons left">add_circle_outline</i>
          NOVO
        </a>
      </div>
    </div>
  );
}
