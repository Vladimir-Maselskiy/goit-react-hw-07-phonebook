import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
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
