import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { deleteContact } from '../../redux/contacts/contacts-operations';

import Contact from './Contact';
import EditModal from '../EditModal';

import styles from './ContactList.module.css';
import '../../styles/animation.css';

export default function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const deleteOnClick = event => {
    dispatch(deleteContact(event.target.id));
  };

  return (
    <>
      <h2 className={styles.title}>Contacts</h2>
      <TransitionGroup
        appear={false}
        component="ul"
        children="li"
        className={styles.list}
      >
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} classNames="contacts" timeout={250}>
            <li className={styles.item}>
              <Contact name={name} number={number} />
              <EditModal id={id} name={name} number={number} />
              <button className={styles.button} id={id} onClick={deleteOnClick}>
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
}
