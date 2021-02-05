import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getContacts } from '../../redux/contacts/contacts-selectors';
import { editContact } from '../../redux/contacts/contacts-operations';

import styles from './EdtiContactForm.module.css';

function EdtiContactForm({
  id,
  name,
  number,
  contacts,
  showAlert,
  onEdit,
  onCloseModal,
}) {
  const [editName, setName] = useState(name);
  const [editNumber, setNumber] = useState(number);

  const heandleInputName = event => {
    setName(event.currentTarget.value);
  };

  const heandleInputNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const verifyNewContact = ({ editName, editNumber }) => {
    let verify = true;
    contacts.forEach(({ id: contactId, name, number }) => {
      if (
        contactId !== id &&
        (name.toLowerCase() === editName.toLowerCase() || editNumber === number)
      ) {
        showAlert();
        verify = false;
      }
    });

    return verify;
  };

  const editContact = event => {
    event.preventDefault();

    if (verifyNewContact({ editName, editNumber })) {
      onEdit({ id, name: editName, number: editNumber });
      onCloseModal();
      setName('');
      setNumber('');
    }
  };

  return (
    <form className={styles.form} onSubmit={editContact}>
      <label className={styles.label}>
        Name:
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Awesome name"
          value={editName}
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
          value={editNumber}
          onChange={heandleInputNumber}
          required
        />
      </label>
      <button className={styles.button} type="submit">
        Edit contact
      </button>
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onEdit: contact => dispatch(editContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EdtiContactForm);
