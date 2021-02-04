import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.css';

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default function Contact({ name, number }) {
  return (
    <div className={styles.contact}>
      <span>{name}</span>
      <span>{number}</span>
    </div>
  );
}
