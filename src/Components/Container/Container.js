import React from 'react';

import styles from './Container.module.css';

export default function Container({ children }) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
