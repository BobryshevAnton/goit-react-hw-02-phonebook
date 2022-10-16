// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       Hello my darling friends and other
//     </div>
//   );
// };
import React from 'react';
import Form from './Form/Form';
import { nanoid } from 'nanoid';
import './Form.css';

class App extends React.Component {
  keyId = nanoid();
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      // console.log(data.name);
      return {
        contacts: prevState.contacts.concat(data.name),
      };
    });

    // console.log(data.name);
  };
  render() {
    const contacts = this.state.contacts;

    return (
      <section className="sectionForm">
        <h1 className="sectionTitle">Phonebook</h1>
        <div className="bookForm">
          <Form onSubmit={this.formSubmitHandler} />

          <h2>Contacts:</h2>
          <ul className="phoneLIst">
            {contacts.map(contact => (
              <li key={this.keyId}>{contact}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
export default App;
