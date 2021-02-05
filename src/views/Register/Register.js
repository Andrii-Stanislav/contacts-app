import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import styles from './Register.module.css';
import { registerUser } from '../../redux/auth/auth-operations';

export default function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const heandleInputName = event => {
    setName(event.currentTarget.value);
  };
  const heandleInputEmail = event => {
    setEmail(event.currentTarget.value);
  };
  const heandleInputPassword = event => {
    setPassword(event.currentTarget.value);
  };

  const heandleRegisterUser = event => {
    event.preventDefault();
    dispatch(registerUser({ name, email, password }));
    setName('');
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
      <form className={styles.form} onSubmit={heandleRegisterUser}>
        <label className={styles.label}>
          Login
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Unreal name"
            value={name}
            onChange={heandleInputName}
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
            minLength="7"
            placeholder="Stong password"
            value={password}
            onChange={heandleInputPassword}
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
