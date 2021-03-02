import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

// action
export const changeTheme = createAction('theme/changeTheme');

// reducer
export const darkTheme = createReducer(false, {
  [changeTheme]: (state, _) => !state,
});

// selector
export const getdarkTheme = state => state.darkTheme;