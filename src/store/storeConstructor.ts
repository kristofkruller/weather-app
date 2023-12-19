// REDUX
import { Action, Dispatch, Middleware, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import rootReducer from './rootReducer'
import { weatherApiSlice } from './slices/weatherApiSlice'
import { createLogger } from 'redux-logger'

const persistConfig = {
  key: "root",
  storage,
  // whitelist: [], // Things you want to persist
  // blacklist: [], // Things you don't
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = createLogger({
  level: 'info',
  collapsed: true,
  logErrors: true,
})

const middlewares: Array<Middleware<{}, any, Dispatch<Action>>> = []

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger as Middleware<{}, any, Dispatch<Action>>)
}


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist's action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    .concat(weatherApiSlice.middleware, ...middlewares)
})

export const persistor = persistStore(store)

// let useSelector (useAppSelector) know what store holds
export type RootState = ReturnType<typeof store.getState>

// for typed dispatch
export type AppDispatch = typeof store.dispatch

// for websocket connections
// setupListeners(store.dispatch)