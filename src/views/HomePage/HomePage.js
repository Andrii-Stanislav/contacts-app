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
        <p>
          Please do not seriously evaluate the design of this application. I'm
          not a designer, I'm a Front-End developer. I made a design layout in 2
          minutes. <br />
          So it is better to register, test my application and be sure to check
          the{' '}
          <a
            href="https://github.com/Andrii-Stanislav/contacts-app"
            target="_blanc"
          >
            sourse code
          </a>
          .<br />
          This cat and I wish you a good day<code>))</code>
        </p>
      </div>
    </CSSTransition>
  );
}

export default HomePage;
