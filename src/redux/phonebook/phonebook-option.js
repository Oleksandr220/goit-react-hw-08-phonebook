import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../phonebookAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async name => await api.fetchContacts(name),
);

export const postContacts = createAsyncThunk(
  'contacts/postContacts',
  async ({ name, number }) => await api.postContact({ name, number }),
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    console.log(id);
    return await api.deleteContact(id);
  },
);
