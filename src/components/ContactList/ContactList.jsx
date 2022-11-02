import React from 'react';
export default function ContactList({ listContacts }) {
  return (
    <ul className="phoneLIst">
      {listContacts.map(contact => (
        <li key={contact.name + contact.number}>
          <span className="phoneName"> {contact.name}</span>: {contact.number}
          <button
            type="button"
            className="formBtn"
            // onClick={this.handleClickDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
