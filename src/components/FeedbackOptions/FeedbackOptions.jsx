import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          className={css.btn}
          onClick={() => leaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propType = {
  leaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.number),
};
