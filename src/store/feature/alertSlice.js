import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    type: 'warning',
    message: '',
};

const alertSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showAlert(state, action) {
            state.isOpen = true;
            state.type = action?.payload?.type;
            state.message = action?.payload?.message;
        },
        hideAlert(state) {
            state.isOpen = false;
            state.type = 'info';
            state.message = '';
        },
    },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
