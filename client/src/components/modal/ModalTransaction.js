import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalTransaction({ onClosedModal }) {
  const handleModalClose = () => {
    onClosedModal();
  };

  return (
    <div>
      <Modal isOpen={true}>
        <div style={styles.flexRow}>
          <span style={styles.title}>Manutenção de notas</span>
          <button
            className="waves-effect waves-lights btn red dark-4"
            onClick={handleModalClose}
          >
            X
          </button>
        </div>
      </Modal>
    </div>
  );
}
const styles = {
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },

  title: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },

  errorMessage: {
    color: "red",
    fontWeight: "bold",
  },
};
