import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ handleChange }) => {
  return (
    <div className={css.box}>
      <label className={css.labelStyle}>Find contacts by name</label>
      <input
        type="text"
        className={css.sting}
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;

Filter.propType = {
  handleChange: PropTypes.func.isRequired,
};
