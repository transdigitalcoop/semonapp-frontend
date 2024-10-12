import { createSlice } from "@reduxjs/toolkit";

export const integrantsSlice = createSlice({
    name: "integrants",
    initialState: {
        integrants: [],
        loading: true,
        error: null,
    },
    reducers: {
        onLoadIntegrants: (state, { payload =[]}) => {
        state.loading = false;
        state.integrants = payload;
        },
        setError: (state, { payload }) => {
        state.error = payload;
        },
        onLogoutIntegrants: (state) => {  
            state.integrants = [];
            state.loading = true;
            state.error = null;
        
        }
    },
    });

export const { onLoadIntegrants, onLogoutIntegrants, setError } = integrantsSlice.actions;