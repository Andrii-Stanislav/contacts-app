import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFilter } from '../../redux/contacts/contacts-selectors';
import { changeFilter } from '../../redux/contacts/filter-actions';

import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        Filter:
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
