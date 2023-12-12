// REDUX
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import rootReducer from './rootReducer'
import { weatherApiSlice } from './slices/weatherApiSlice'

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [], // Things you want to persist
  // blacklist: [], // Things you don't
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist's action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(weatherApiSlice.middleware),
});

export const persistor = persistStore(store)

// let useSelector (useAppSelector) know what store holds
export type RootState = ReturnType<typeof store.getState>;

// for typed dispatch
export type AppDispatch = typeof store.dispatch;

// for websocket connections
// setupListeners(store.dispatch)