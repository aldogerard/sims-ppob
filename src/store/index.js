import { configureStore } from '@reduxjs/toolkit';

import alertSlice from './feature/alertSlice';
import authSlice from './feature/authSlice';
import modalSlice from './feature/modalSlice';
import serviceSlice from './feature/serviceSlice';

export const store = configureStore({
    reducer: {
        alert: alertSlice,
        auth: authSlice,
        modal: modalSlice,
        service: serviceSlice,
    },
});
