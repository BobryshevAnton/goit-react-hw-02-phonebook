import React from 'react';
import { nanoid } from 'nanoid';

class FormFirst extends React.Component {
  loginId = nanoid();
  loginNum = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleOnSubmit = e => {
    // const message = `${this.state.name} is already in contacts`;
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="Form">
        <label htmlFor={this.loginId} className="formName">
          Name
        </label>

        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          id={this.loginId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="FormInput"
        />
        <label htmlFor={this.loginNum} className="formName">
          Number
        </label>

        <input
          value={this.state.number}
          onChange={this.handleChange}
          id={this.loginNum}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="FormInput"
        />

        <button type="submit" className="formBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default FormFirst;
