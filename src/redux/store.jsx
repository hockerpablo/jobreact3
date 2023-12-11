import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import recomendedReducer from './recomended/RecomendedSlice';
import categoriesReducer from './category/categoriesSlice';
import productsReducer from './products/productsSlice'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key : 'root',
    storage
}

const reducers = combineReducers({
    recomended : recomendedReducer,
    categories: categoriesReducer,
    productsList: productsReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore ({
    reducer: persistedReducer   
})


export const persistor = persistStore(store)