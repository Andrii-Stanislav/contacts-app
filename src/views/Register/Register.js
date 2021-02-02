import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import styles from './Register.module.css';
import { registerUser } from '../../redux/auth/auth-operations';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  heandleInput = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  heandleRegisterUser = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    return (
      <CSSTransition
        in={true}
        appear={true}
        timeout={250}
        classNames="fade"
        unmountOnExit
      >
        <form className={styles.form} onSubmit={this.heandleRegisterUser}>
          <label className={styles.label}>
            Login
            <input
              className={styles.input}
              name="name"
              type="text"
              placeholder="Unreal name"
              value={this.state.name}
              onChange={this.heandleInput}
              required
            />
          </label>
          <label className={styles.label}>
            Your email
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="Funny email"
              value={this.state.email}
              onChange={this.heandleInput}
              required
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              name="password"
              type="password"
              placeholder="Stong password"
              value={this.state.password}
              onChange={this.heandleInput}
              required
            />
          </label>
          <button className={styles.button} type="submit">
            Register
          </button>
        </form>
      </CSSTransition>
    );
  }
}

const mapDispatchToProps = {
  onRegister: registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
