import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p className={css.statistics}>Good: {good}</p>
      <p className={css.statistics}>Neutral: {neutral}</p>
      <p className={css.statistics}>Bad: {bad}</p>
      <p className={css.statistics}>Total: {total}</p>
      <p className={css.statistics}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

Statistics.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
