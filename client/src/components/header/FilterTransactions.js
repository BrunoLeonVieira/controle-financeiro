import React from "react";

export default function FilterTransactions({ onChangeFilter, filter }) {
  const handleInputChange = (event) => {
    const newText = event.target.value;
    onChangeFilter(newText);
  };

  return (
    <div className="col s10 l10">
      <input
        placeholder="Pesquisar"
        type="text"
        value={filter}
        onChange={handleInputChange}
      />
    </div>
  );
}
