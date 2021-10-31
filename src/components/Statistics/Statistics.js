import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statisticsContainer}>
    <span className={s.value}>Good: {good}</span>
    <span className={s.value}>Neutral: {neutral}</span>
    <span className={s.value}>Bad: {bad}</span>
    <span className={s.value}>Total: {total}</span>
    <span className={s.value}>Positive feedback: {positivePercentage}%</span>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
