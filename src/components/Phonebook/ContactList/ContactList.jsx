import css from './ContactList.module.css';
import PropTypes from 'prop-types';
const ContactList = ({ removContact, contacts }) => {
  const cols = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.liStyle}>
      {name}:{number}
      <button
        type="button"
        className={css.btn}
        onClick={() => removContact(id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={css.ulstyle}>{cols}</ul>;
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};
ContactList.propTypes = {
  removContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
