import { configureStore } from '@reduxjs/toolkit';

import alertSlice from './feature/alertSlice';
import authSlice from './feature/authSlice';

export const store = configureStore({
    reducer: {
        alert: alertSlice,
        auth: authSlice,
    },
});
