import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from './actions';

axios.defaults.baseURL = 'https://62e66c32de23e263792c05a8.mockapi.io';

export const fetchContactOperation = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(err => dispatch(fetchContactError(err)));
};

export const addContactOperation =
  ({ name, phone }) =>
  dispatch => {
    dispatch(addContactRequest());
    axios
      .post('/contacts', {
        name,
        phone,
      })
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(err => dispatch(addContactError(err)));
  };

export const deleteContactOperation = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(({ data }) => dispatch(deleteContactSuccess(data.id)))
    .catch(err => dispatch(deleteContactError(err)));
};
