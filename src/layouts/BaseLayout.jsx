import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/ui/Navbar';

const BaseLayout = () => {
    return (
        <section>
            <Navbar />
            <main className="container pt-20">
                <Outlet />
            </main>
        </section>
    );
};

export default BaseLayout;
