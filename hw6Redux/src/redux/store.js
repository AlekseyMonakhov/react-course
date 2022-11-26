import {applyMiddleware, createStore} from "redux";
import rootReducer from "./root.reducer";
import {createLogger} from "redux-logger/src";

import thunk from "redux-thunk";
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const logger = createLogger({
    collapsed: true,
})

export const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
export let persistor = persistStore(store)

