import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/ui/Navbar';

const BaseLayout = () => {
    return (
        <section>
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
        </section>
    );
};

export default BaseLayout;
