import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
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
            <ExpandLessIcon />
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

export default Accordion;
