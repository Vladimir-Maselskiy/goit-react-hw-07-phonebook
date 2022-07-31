import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('FETCH_CONTACT_REQUEST');
export const fetchContactSuccess = createAction('FETCH_CONTACT_SUCCESS');
export const fetchContactError = createAction('FETCH_CONTACT_ERROR');

export const addContactRequest = createAction('ADD_CONTACT_REQUEST');
export const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
export const addContactError = createAction('ADD_CONTACT_ERROR');

export const addContact = createAction('ADD_CONTACT', value => ({
  payload: {
    id: nanoid(),
    name: value.name,
    phone: value.phone,
  },
}));
export const deleteContact = createAction('DELETE_CONTACT');
export const filter = createAction('FILTER');
