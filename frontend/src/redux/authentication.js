import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        auth: {
            isLoggedIn: false,
            account: {},
        },
    },
    reducers: {
        login: (state, action) => {
            state.auth.isLoggedIn = true;
            state.auth.account = action.payload.acount
        },

        logout: (state, payload) => {
            state.isLoggedIn = false;
        },
    },
});

export const { login } = authSlice.actions;
export default authSlice.reducer;
