import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import styles from './UserNav.module.css';

export default function UserNav() {
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

  const heandleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <p className={styles.userEmail}>{userName}</p>
      <button type="button" className={styles.button} onClick={heandleLogOut}>
        LogOut
      </button>
    </div>
  );
}
