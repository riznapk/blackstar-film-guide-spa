import React from "react";
import "./Select.scss";

function SelectField({
  label,
  showLabel,
  name,
  value,
  onChange,
  options,
  error,
  helperText,
  defaultValue,
  className,
  disabled,
}) {
  return (
    <div className={`select-field ${className}`}>
      {label && showLabel && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        className={`select-input ${error ? "error" : ""}`}
        disabled={disabled}
      >
        {defaultValue && (
          <option value="" disabled>
            {defaultValue}
          </option>
        )}
        {options.map((option) => (
          <option key={option.term_id} value={option.term_id}>
            {option.name}
          </option>
        ))}
      </select>
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}

export default SelectField;
