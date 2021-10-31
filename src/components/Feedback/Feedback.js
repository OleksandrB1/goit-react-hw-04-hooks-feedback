import s from "./Feedback.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    <div className={s.feedbackControls}>
      {options.map((item) => (
        <button
          key={item}
          className={s.button}
          onClick={() => onLeaveFeedback(item)}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
