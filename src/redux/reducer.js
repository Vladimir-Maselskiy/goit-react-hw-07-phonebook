import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactSuccess,
  filter,
} from './actions';

const itemReducer = createReducer([], {
  [fetchContactSuccess]: (_, action) => action.payload,
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
});

const filterReducer = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
