import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editContact } from '../../redux/contacts/contacts-operations';

import styles from './EdtiContactForm.module.css';

class EdtiContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  componentDidMount() {
    const { id, name, number } = this.props;
    this.setState({ id, name, number });
  }

  heandleInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  editContact = event => {
    event.preventDefault();

    this.props.onEdit({ ...this.state });
    this.props.onCloseModal();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.editContact}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Awesome name"
            value={this.state.name}
            onChange={this.heandleInput}
            required
          />
        </label>
        <label className={styles.label}>
          Phone <span className={styles.example}>(000-00-00)</span>:
          <input
            className={styles.input}
            name="number"
            type="text"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            maxLength="9"
            placeholder="Cool phone number"
            value={this.state.number}
            onChange={this.heandleInput}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Edit contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onEdit: contact => dispatch(editContact(contact)),
});

export default connect(null, mapDispatchToProps)(EdtiContactForm);
