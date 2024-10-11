import { configureStore } from '@reduxjs/toolkit';
import { authSlice, integrantsSlice } from './';


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        integrants: integrantsSlice.reducer,
    },
})