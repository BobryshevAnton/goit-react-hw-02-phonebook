import React from 'react';

import FormFirst from './Form/FormFirst';
import ContactList from './ContactList/ContactList';
import SearchList from './SearchList/SearcList';

import FormSecond from './Form/FormSecond';
import './Form.css';
import { nanoid } from 'nanoid';

class App extends React.Component {
  contactId = nanoid();

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // filter: '',
  };

  formSubmitHandler = inputData => {
    this.setState(prevState => {
      // const contactList = prevState.contacts.concat(inputData);

      return {
        contacts: [...prevState.contacts.concat(inputData)],
      };
    });
  };

  formSearchHandler = inputSearch => {
    console.log(inputSearch);
  };

  formSubmitInput = input => {
    this.setState({ filter: input });
  };

  render() {
    const listContacts = this.state.contacts;
    const inputContact = this.state.filter;

    return (
      <section className="sectionForm">
        <h1 className="sectionTitle">Phonebook</h1>
        <div className="bookForm">
          <FormFirst onSubmit={this.formSubmitHandler} />
          <h2>Contacts:</h2>
          <ContactList listContacts={listContacts} />
        </div>
        <div className="bookForm">
          <FormSecond onSubmitInput={this.formSubmitInput} />
          <SearchList inputContact={inputContact} listContacts={listContacts} />
        </div>
      </section>
    );
  }
}

export default App;
