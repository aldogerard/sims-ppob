import React from 'react';
import { useSelector } from 'react-redux';

import { AuthSection } from '@/constant/authSection';

import Footer from './components/Footer';
import Header from './components/Header';
import LoginSection from './section/LoginSection';
import RegistrationSection from './section/RegistrationSection';

const AuthView = () => {
    const { currentSection } = useSelector((state) => state.auth);

    return (
        <section className="flex h-screen flex-col items-center justify-center">
            <Header />

            {currentSection === AuthSection.LOGIN ? (
                <LoginSection />
            ) : (
                <RegistrationSection />
            )}

            <Footer />
        </section>
    );
};

export default AuthView;
