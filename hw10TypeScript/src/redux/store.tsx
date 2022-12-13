import {combineReducers, configureStore} from "@reduxjs/toolkit";


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
    })
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export let persistor = persistStore(store);

