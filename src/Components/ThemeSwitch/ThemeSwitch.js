import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import { Switch } from '@material-ui/core';

import { changeTheme } from '../../redux/theme/theme';

const StyledSwitch = withStyles({
  root: {
    position: 'absolute',
    top: '1px',
    right: '1px',
  },
  switchBase: {
    color: '#000',
    '&$checked': {
      color: '#fff',
    },

    '&$checked + $track': {
      backgroundColor: '#000',
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function ThemeSwitch() {
  const [darkTheme, setDarkTheme] = useState(false);
  const dispatch = useDispatch();

  const handleChange = () => {
    setDarkTheme(prevTheme => !prevTheme);
    dispatch(changeTheme());
  };
  return <StyledSwitch checked={darkTheme} onChange={handleChange} />;
}
