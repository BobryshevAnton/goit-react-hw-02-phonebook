import React from 'react';
import { nanoid } from 'nanoid';

class Form extends React.Component {
  loginId = nanoid();
  state = {
    name: '',
    // number: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleOnSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '' });
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

        <button type="submit" className="formBtn">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
