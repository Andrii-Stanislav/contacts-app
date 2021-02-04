import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../Components/ContactForm';
import ContactList from '../../Components/ContactList';
import Filter from '../../Components/Filter';
import Alert from '../../Components/Alert';

import { CSSTransition } from 'react-transition-group';

import styles from './Contacts.module.css';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getContactsLength } from '../../redux/contacts/contacts-selectors';

export default function Contacts() {
  const [alert, setAlert] = useState(false);

  const contactsLength = useSelector(getContactsLength);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };

  return (
    <>
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="title"
        unmountOnExit
      >
        <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>
      <ContactForm showAlert={showAlert} />
      <CSSTransition
        in={contactsLength > 1}
        appear={true}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>
      <ContactList />
      <CSSTransition
        in={alert}
        appear={true}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <Alert text="Contact is already exist" />
      </CSSTransition>
    </>
  );
}
