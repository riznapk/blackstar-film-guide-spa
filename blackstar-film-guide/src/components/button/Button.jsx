import PropTypes from "prop-types";
import "./Button.scss";

function Button({ buttonText, buttonOnClick }) {
  return (
    <button onClick={buttonOnClick} className="custom-button">
      {buttonText}
    </button>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.string.isRequired,
};

export default Button;
