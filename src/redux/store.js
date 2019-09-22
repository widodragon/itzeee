import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import promiseMiddleware from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import reducer from "./reducers";
const logger = createLogger({});
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(
	persistedReducer, 
	{}, 
	applyMiddleware(
	    logger,
	    promiseMiddleware
	)
);
export const persistor = persistStore(store);

