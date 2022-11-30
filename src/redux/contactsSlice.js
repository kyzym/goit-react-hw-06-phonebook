import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import initialContacts from '../components/data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: initialContacts,
  },

  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
