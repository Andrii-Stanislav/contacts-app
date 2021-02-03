import React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './HomePage.module.css';

import gif from '../../images/homePage.gif';

function HomePage() {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames="fade"
      unmountOnExit
    >
      <div className={styles.homePage}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={gif} alt="gif" />
        </div>
        <h1 className={styles.title}>Welcome to the contacts app</h1>
      </div>
    </CSSTransition>
  );
}

export default HomePage;
