import React from 'react';
// import contacts from './contacts';
import ContactList from './ContactList/ContactList';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactForm from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
// import css from './Phonebook.module.css';
export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('my-contacts'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem('my-contacts', JSON.stringify(contacts));
    }
  }

  removContact = id => {
    this.setState(({ contacts }) => {
      const newContacts = contacts.filter(contact => contact.id !== id);
      return { contacts: newContacts };
    });
  };
  addContact = ({ name, number }) => {
    if (this.isDublicate(name, number)) {
      return alert(`${name}.Number:${number} is already ixist`);
    }
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
  };
  handelFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };
  isDublicate(name, number) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;
    const contact = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });
    return Boolean(contact);
  }
  getFilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizeFilter = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizeFilter) ||
        number.toLowerCase().includes(normalizeFilter)
      );
    });
    return result;
  }
  render() {
    const { addContact, removContact, handelFilter } = this;

    const contacts = this.getFilterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <h1>Contacts</h1>
        <FilterContacts handleChange={handelFilter} />
        <ContactList removContact={removContact} contacts={contacts} />
      </div>
    );
  }
}
