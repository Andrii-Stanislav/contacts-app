import axios from 'axios';
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

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  axios
    .get('/contacts')
    .then(({ data }) => {
      dispatch(fetchContactSuccess(data));
    })
    .catch(error => dispatch(fetchContactError(error)));
};

const createContact = contact => async dispatch => {
  dispatch(createContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(createContactSuccess(data)))
    .catch(error => dispatch(createContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => {
      dispatch(deleteContactSuccess(contactId));
    })
    .catch(error => dispatch(deleteContactError(error)));
};

const editContact = contact => async dispatch => {
  const { id, name, number } = contact;
  dispatch(editContactContactRequest());

  axios
    .patch(`/contacts/${id}`, { name, number })
    .then(({ data }) => dispatch(editContactContactSuccess(data)))
    .catch(error => dispatch(editContactContactError(error)));
};

export { fetchContacts, createContact, deleteContact, editContact };
