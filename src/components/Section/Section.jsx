import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className={css.box}>
      <h3 className={css.title}>{title}</h3>
      {children}
    </div>
  );
};

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
