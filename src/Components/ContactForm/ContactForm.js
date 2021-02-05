import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { createContact } from '../../redux/contacts/contacts-operations';

import styles from './ContactForm.module.css';

export default function ContactForm({ showAlert }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const heandleInputName = event => {
    setName(event.currentTarget.value);
  };
  const heandleInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const verifyNewContact = ({ name: newName, number: newNumber }) => {
    let verify = true;
    contacts.forEach(({ name, number }) => {
      if (
        name.toLowerCase() === newName.toLowerCase() ||
        newNumber === number
      ) {
        showAlert();
        verify = false;
      }
    });

    return verify;
  };

  const createNewContact = event => {
    event.preventDefault();

    if (verifyNewContact({ name, number })) {
      dispatch(createContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={createNewContact}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Awesome name"
          value={name}
          onChange={heandleInputName}
          required
        />
      </label>
      <label className={styles.label}>
        Phone <span className={styles.example}>000-00-00</span>:
        <input
          className={styles.input}
          name="number"
          type="text"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          maxLength="9"
          placeholder="Cool phone number"
          value={number}
          onChange={heandleInputNumber}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Create contact
      </button>
    </form>
  );
}
