import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadReducer from '../store/load/loadSlice'
import storage from 'redux-persist/lib/storage';
import {
    FLUSH, PAUSE, PERSIST, PURGE, REGISTER,
    REHYDRATE, persistReducer, persistStore
} from 'redux-persist';

const rootReducer = combineReducers({
    load: loadReducer
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