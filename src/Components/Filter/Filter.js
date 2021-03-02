import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/filter-actions';

import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Filter"
        />
      </label>
    </div>
  );
}
