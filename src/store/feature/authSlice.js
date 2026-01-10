import { createSlice } from '@reduxjs/toolkit';

import { AuthSection } from '@/constant/authSection';

const initialLoginCredential = {
    email: '',
    password: '',
};

const initialRegistrationCredential = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    errors: {},
};

const initialState = {
    currentSection: AuthSection.LOGIN,
    loginCredential: initialLoginCredential,
    registrationCredential: initialRegistrationCredential,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentSection: (state, action) => {
            state.currentSection = action.payload;
        },

        setLoginCredential: (state, action) => {
            const { name, value } = action.payload;
            state.loginCredential[name] = value;
        },
        setRegistrationCredential: (state, action) => {
            const { name, value } = action.payload;
            state.registrationCredential[name] = value;
        },
        setRegistrationErrors: (state, action) => {
            state.registrationCredential.errors = action.payload;
        },
        removeRegistrationErrors: (state, action) => {
            const { name } = action.payload;
            delete state.registrationCredential.errors[name];
        },
        resetRegistration: (state) => {
            state.registrationCredential = initialRegistrationCredential;
        },

        resetLogin: (state) => {
            state.loginCredential = initialLoginCredential;
        },
    },
});

export const {
    setCurrentSection,
    setLoginCredential,
    setRegistrationCredential,
    setRegistrationErrors,
    removeRegistrationErrors,
    resetRegistration,
    resetLogin,
} = authSlice.actions;

export default authSlice.reducer;
