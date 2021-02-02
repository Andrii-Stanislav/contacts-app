import { getDefaultMiddleware } from '@reduxjs/toolkit';

// import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const contactsPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export { persistStore, persistReducer, contactsPersistConfig, middleware };
