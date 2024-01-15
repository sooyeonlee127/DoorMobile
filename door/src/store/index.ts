import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadReducer from './load/loadSlice'
import popupReducer from './popup/popupSlice'
import weddingReducer from "./wedding/weddingSlice";
import contactReducer from "./contact/contactSlice";
import mapReducer from "./map/mapSlice";
import storage from 'redux-persist/lib/storage';
import {
    FLUSH, PAUSE, PERSIST, PURGE, REGISTER,
    REHYDRATE, persistReducer, persistStore
} from 'redux-persist';

const rootReducer = combineReducers({
    load: loadReducer,
    popup: popupReducer,
    wedding: weddingReducer,
    contact: contactReducer,
    map: mapReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({ // configureStore: redux 저장소 생성
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(
        {
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }
    )
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
