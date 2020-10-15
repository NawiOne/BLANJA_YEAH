import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {createLogger} from 'redux-logger'
import rpm from 'redux-promise-middleware';

// import indexReducer from './reducer/index';
import indexReducer from './reducer';
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, indexReducer)

const logger = createLogger();
const enhancer = applyMiddleware(rpm, logger);

const store = createStore(persistedReducer, enhancer)
const persiststor = persistStore(store)
// export default store

export {store, persiststor}