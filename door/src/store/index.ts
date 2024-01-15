import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loadReducer from './load/loadSlice';
import popupReducer from './popup/popupSlice';
import weddingReducer from './wedding/weddingSlice';
import contactReducer from './contact/contactSlice';
import mainReducer from './main/mainSlice';
import galleryReducer from './gallery/gallerySlice';
import calendarReducer from './calendar/calendarSlice';
import accountReducer from './account/accountSlice';
import commentReducer from './comment/commentSlice';
import mapReducer from "./map/mapSlice";
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

const rootReducer = combineReducers({
  load: loadReducer,
  popup: popupReducer,
  wedding: weddingReducer,
  contact: contactReducer,
  main: mainReducer,
  calendar: calendarReducer,
  gallery: galleryReducer,
  account: accountReducer,
  comment: commentReducer,
  map: mapReducer

});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // configureStore: redux 저장소 생성
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
