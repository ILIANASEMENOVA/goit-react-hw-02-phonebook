import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  updateState = (option, value) => {
    this.setState({ [option]: value });
  };

  addContact = contact => {
    const isExist = this.state.contacts.some(
      ({ name }) => name === contact.name
    );
    if (isExist) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...contact,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  findContacts = () => {
    const { contacts, filter } = this.state;
    const formatedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(formatedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const findedContacts = this.findContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} updateState={this.updateState} />
        <ContactList
          contacts={findedContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
