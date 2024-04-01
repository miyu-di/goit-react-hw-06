import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const contactsPersistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);