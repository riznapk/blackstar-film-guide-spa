import { useState } from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Accordion.scss";

function Accordion({
  label,
  showLabel = true,
  name,
  content,
  defaultOpen = false,
  disabled = false,
  className,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    if (!disabled) {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {showLabel && (
        <div
          className={`accordion-header ${disabled ? "disabled" : ""}`}
          onClick={toggleAccordion}
          role="button"
          aria-expanded={isOpen}
          aria-controls={name}
        >
          {label}
          <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
            <ExpandMoreIcon style={{ fontSize: "40px" }} />
          </span>
        </div>
      )}
      <div
        id={name}
        className={`accordion-content ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        {content}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  label: PropTypes.string,
  showLabel: PropTypes.bool,
  name: PropTypes.string,
  content: PropTypes.node,
  defaultOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Accordion;
