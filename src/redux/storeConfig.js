import { contactsReducer } from './contactsSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContacts = persistReducer(persistConfig, contactsReducer);
