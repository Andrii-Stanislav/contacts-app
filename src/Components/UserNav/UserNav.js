import React from 'react';
import { connect } from 'react-redux';

import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

import styles from './UserNav.module.css';

const UserNav = ({ userEmail, logOut }) => {
  return (
    <div className={styles.container}>
      <p className={styles.userEmail}>{userEmail}</p>
      <button type="button" className={styles.button} onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  userEmail: getUserName(state),
});

const mapDispatchToProps = {
  logOut: logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserNav);
