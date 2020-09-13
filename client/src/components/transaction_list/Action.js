import React from "react";

export default function Action({ type, id, onActionClick }) {
  const handleOnClick = () => {
    onActionClick(id, type);
  };
  return (
    <div>
      <i
        className="material-icons"
        onClick={handleOnClick}
        style={{ cursor: "pointer" }}
      >
        {type}
      </i>
    </div>
  );
}
