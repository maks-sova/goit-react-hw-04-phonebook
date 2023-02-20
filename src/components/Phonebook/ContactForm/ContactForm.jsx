import { useState } from 'react';
import PropTypes from 'prop-types';
import contacts from '../contacts';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...contacts });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setState({ ...contacts });
  };
  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.box}>
        <label for="name" className={css.labelStyle}>
          Name
        </label>
        <input
          value={name}
          onChange={handleChange}
          className={css.sting}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.labelStyle}>Number</label>
        <input
          value={number}
          onChange={handleChange}
          className={css.sting}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className={css.btn}>Add contact</button>
      </div>
    </form>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const { onSubmit } = this.props;
//     onSubmit({ ...this.state });
//     this.reset();
//   };

//   reset() {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   }
//   handleChange = ({ target }) => {
//     const { name, value } = target;
//     this.setState({
//       [name]: value,
//     });
//   };
//   render() {
//     const { handleChange, handleSubmit } = this;
//     const { name, number } = this.state;
//     return (
//       <form onSubmit={handleSubmit}>
//         <div className={css.box}>
//           <label for="name" className={css.labelStyle}>
//             Name
//           </label>
//           <input
//             value={name}
//             onChange={handleChange}
//             className={css.sting}
//             // id="name"
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <label className={css.labelStyle}>Number</label>
//           <input
//             value={number}
//             onChange={handleChange}
//             className={css.sting}
//             // id="name"
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />

//           <button className={css.btn}>Add contact</button>
//         </div>
//       </form>
//     );
//   }
// }

// export default ContactForm;

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
