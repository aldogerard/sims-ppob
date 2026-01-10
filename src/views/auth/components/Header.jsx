import React from 'react';
import { useSelector } from 'react-redux';

import { AuthSection } from '@/constant/authSection';

const Header = () => {
    const { currentSection } = useSelector((state) => state.auth);

    const getDescription = {
        [AuthSection.LOGIN]: 'Masuk atau buat akun untuk memulai',
        [AuthSection.REGISTRATION]: 'Lengkapi data untuk membuat akun',
    };

    const description = getDescription[currentSection];

    return (
        <header className="mb-9 flex flex-col items-center justify-center gap-8">
            <div className="flex items-center gap-2">
                <img
                    src="/images/Logo.png"
                    alt="logo.png"
                    className="h-7 w-auto"
                />
                <h3 className="text-xl font-semibold">SIMS PPOB</h3>
            </div>
            <h1 className="max-w-80 text-center text-2xl font-medium">
                {description}
            </h1>
        </header>
    );
};

export default Header;
