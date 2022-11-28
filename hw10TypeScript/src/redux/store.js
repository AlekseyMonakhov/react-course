import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {createLogger} from "redux-logger/src";


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import popularSlice from "./popularSlice";
import battleSlice from "./battleSlice";

const logger = createLogger({
    collapsed: true,
})

const rootReducer = combineReducers({
    popular: popularSlice,
    battle: battleSlice,
})


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(logger)
})


export let persistor = persistStore(store)

