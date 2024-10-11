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
    },
    });

export const { onLoadIntegrants, setError } = integrantsSlice.actions;