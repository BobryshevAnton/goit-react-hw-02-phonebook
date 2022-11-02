import React from 'react';
import { nanoid } from 'nanoid';

class FormSecond extends React.Component {
  contactName = nanoid();

  state = {
    inputValue: '',
  };
  handleInputChange = e => {
    const { value } = e.currentTarget;

    this.setState({ inputValue: value });

    this.props.onSubmitInput(e.currentTarget.value.toLowerCase());
  };

  render() {
    return (
      <form className="Form">
        <label className="formName" htmlFor={this.contactName}>
          Find contact by name
        </label>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          name="inputValue"
          id={this.contactName}
        />
      </form>
    );
  }
}

export default FormSecond;
