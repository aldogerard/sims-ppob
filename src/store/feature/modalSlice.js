import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    type: 'warning',
    message: '',
    price: 0,
    actionType: null,
    actionText: '',
};

const modalSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showModal(state, action) {
            state.isOpen = true;
            state.type = action?.payload?.type;
            state.message = action?.payload?.message;
            state.price = action?.payload?.price || 0;
            state.actionType = action?.payload?.actionType;
            state.actionText = action?.payload?.actionText || '';
        },
        hideModal(state) {
            state.isOpen = false;
            state.type = 'info';
            state.actionText = '';
            state.actionType = null;
            state.price = 0;
            state.message = '';
        },
    },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
