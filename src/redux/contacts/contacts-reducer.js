import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  editContactContactRequest,
  editContactContactSuccess,
  editContactContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [createContactSuccess]: (state, { payload }) => [...state, payload],
  [editContactContactSuccess]: (state, { payload }) => [
    ...state.map(contact => {
      return contact.id === payload.id ? payload : contact;
    }),
  ],
  [deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(contact => contact.id !== payload),
  ],
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [createContactRequest]: () => true,
  [createContactSuccess]: () => false,
  [createContactError]: () => false,
  [editContactContactRequest]: () => true,
  [editContactContactSuccess]: () => false,
  [editContactContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactError]: error => error,
  [createContactError]: error => error,
  [editContactContactError]: error => error,
  [deleteContactError]: error => error,
});

export default combineReducers({
  contacts,
  loading,
  error,
});
