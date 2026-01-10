import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <section className="flex max-h-screen">
            <main className="w-1/2">
                <Outlet />
            </main>
            <aside className="w-1/2">
                <img
                    src="/images/illustrasi_login.png"
                    alt="Logo"
                    className="h-full w-full object-cover"
                />
            </aside>
        </section>
    );
};

export default AuthLayout;
