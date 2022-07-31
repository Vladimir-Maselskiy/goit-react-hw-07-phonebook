
import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('FETCH_CONTACT_REQUEST');
export const fetchContactSuccess = createAction('FETCH_CONTACT_SUCCESS');
export const fetchContactError = createAction('FETCH_CONTACT_ERROR');

export const addContactRequest = createAction('ADD_CONTACT_REQUEST');
export const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
export const addContactError = createAction('ADD_CONTACT_ERROR');

export const deleteContactRequest = createAction('DELETE_CONTACT_REQUEST');
export const deleteContactSuccess = createAction('DELETE_CONTACT_SUCCESS');
export const deleteContactError = createAction('DELETE_CONTACT_ERROR');

export const filter = createAction('FILTER');
