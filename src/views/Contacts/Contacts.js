import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactForm from '../../Components/ContactForm';
import ContactList from '../../Components/ContactList';
import Filter from '../../Components/Filter';
import Alert from '../../Components/Alert';

import { CSSTransition } from 'react-transition-group';

import styles from './Contacts.module.css';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import { getContactsLength } from '../../redux/contacts/contacts-selectors';

class App extends Component {
  state = {
    alert: false,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  showAlert = () => {
    this.setState({ alert: true });
    setTimeout(() => this.setState({ alert: false }), 2000);
  };

  render() {
    const { contactsLength } = this.props;
    const { alert } = this.state;

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
        <ContactForm showAlert={this.showAlert} />
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
}

const mapStateToProps = state => ({
  contactsLength: getContactsLength(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
