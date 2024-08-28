import React from "react";
import "./Modal.scss";
import CancelIcon from "@mui/icons-material/Cancel";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <button className="modal-close" onClick={onClose}>
        <CancelIcon
          sx={{
            color: "#FF6222",
            fontSize: "50px",
          }}
        />
      </button>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
