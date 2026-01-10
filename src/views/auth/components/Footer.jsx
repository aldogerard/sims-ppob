import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AuthSection } from '@/constant/authSection';
import { setCurrentSection } from '@/store/feature/authSlice';

const Footer = () => {
    const dispatch = useDispatch();

    const { currentSection } = useSelector((state) => state.auth);

    const getDescription = {
        [AuthSection.LOGIN]: 'belum punya akun? registrasi',
        [AuthSection.REGISTRATION]: 'sudah punya akun? login',
    };

    const description = getDescription[currentSection];

    const handleClick = () => {
        const newSection =
            currentSection === AuthSection.LOGIN
                ? AuthSection.REGISTRATION
                : AuthSection.LOGIN;
        dispatch(setCurrentSection(newSection));
    };

    return (
        <p className="mt-9 text-center text-xs font-medium text-gray-400">
            {description}{' '}
            <span
                onClick={handleClick}
                className="cursor-pointer font-semibold text-rose-600"
            >
                di sini
            </span>
        </p>
    );
};

export default Footer;
