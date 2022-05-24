import { configureStore } from '@reduxjs/toolkit'
import sectionReducer from './slices/CurrentSectionSlice'
import libroReducer from './slices/LibroSlice';
import currentUserReducer from './slices/CurrentUserSlice';
import userReducer from './slices/UserSlice';

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    currentUser: currentUserReducer,
    usuarios: userReducer,
    libros: libroReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch