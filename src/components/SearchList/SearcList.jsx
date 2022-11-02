import React from 'react';
export default function SearchList({ listContacts, inputContact }) {
  const searchList = listContacts.filter(contact =>
    contact.name.toLowerCase().includes(inputContact)
  );

  return (
    <ul className="phoneLIst">
      {inputContact === ''
        ? ''
        : searchList.map(contact => (
            <li key={contact.name + contact.number}>
              <span className="phoneName"> {contact.name}</span>:{' '}
              {contact.number}
            </li>
          ))}
    </ul>
  );
}
