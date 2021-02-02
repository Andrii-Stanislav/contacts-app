import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  contactsPersistConfig,
  middleware,
} from './persistConfig';

import authReducer from './auth/auth-reducer';
import contactsReducer from './contacts/contacts-reducer';
import { filter } from './contacts/filter-reducer';

const persistedReducer = persistReducer(contactsPersistConfig, authReducer);
const reducer = {
  auth: persistedReducer,
  contacts: contactsReducer,
  filter,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
