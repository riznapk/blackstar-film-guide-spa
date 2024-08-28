import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";

function Icon({ src, size = 24, alt, className = "", tooltip }) {
  return (
    <div className="icon-wrapper">
      <Tooltip title={tooltip} placement="top" arrow>
        <img
          src={src}
          alt={`icon ${alt}`}
          className={`icon ${className}`}
          style={{ width: size, height: size }}
        />
      </Tooltip>
    </div>
  );
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string,
  tooltip: PropTypes.string,
};

export default Icon;
