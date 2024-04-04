import { configureStore } from '@reduxjs/toolkit';
import { messageReducer } from './messageReducer';

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

const messConfig = {
  key: 'message',
  storage,
  whitelist: ['name', 'email', 'message'],
};

export const store = configureStore({
  reducer: {
    message: persistReducer(messConfig, messageReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from './contactsReducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
// });
