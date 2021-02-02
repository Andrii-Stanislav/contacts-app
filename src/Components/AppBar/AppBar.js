import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import UserNav from '../UserNav';

import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

import styles from './AppBar.module.css';
import routes from '../../routes';

const AppBarr = ({ isAuthenticated }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.mainNav}>
          <li className={styles.item}>
            <NavLink
              to={routes.home}
              className={styles.link}
              exact
              activeClassName={styles.activeLink}
            >
              Home
            </NavLink>
          </li>
          {isAuthenticated && (
            <li className={styles.item}>
              <NavLink
                to={routes.contacts}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
        {isAuthenticated ? (
          <UserNav />
        ) : (
          <ul className={styles.publicNav}>
            <li className={styles.item}>
              <NavLink
                to={routes.login}
                className={styles.link}
                exact
                activeClassName={styles.activeLink}
              >
                Login
              </NavLink>
            </li>
            <li className={styles.item}>
              <NavLink
                to={routes.register}
                className={styles.link}
                activeClassName={styles.activeLink}
              >
                Authorization
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBarr);
