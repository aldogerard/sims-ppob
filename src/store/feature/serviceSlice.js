import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        currentService: null,
    },
    reducers: {
        setCurrentService: (state, action) => {
            state.currentService = action.payload;
        },
    },
});

export const { setCurrentService } = serviceSlice.actions;
export default serviceSlice.reducer;
