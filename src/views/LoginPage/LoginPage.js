import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import styles from './LoginPage.module.css';
import { logIn } from '../../redux/auth/auth-operations';

function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const heandleInputEmail = event => {
    setEmail(event.currentTarget.value);
  };
  const heandleInputPassword = event => {
    setPassword(event.currentTarget.value);
  };

  const heandleLoginUser = event => {
    event.preventDefault();
    onLogin({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames="fade"
      unmountOnExit
    >
      <form className={styles.form} onSubmit={heandleLoginUser}>
        <label className={styles.label}>
          Your email
          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Funny email"
            value={email}
            onChange={heandleInputEmail}
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
            value={password}
            onChange={heandleInputPassword}
            required
          />
        </label>
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </CSSTransition>
  );
}

const mapDispatchToProps = {
  onLogin: logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
