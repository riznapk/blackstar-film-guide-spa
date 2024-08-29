import PropTypes from "prop-types";
import CancelIcon from "@mui/icons-material/Cancel";
import "./Modal.scss";

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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
