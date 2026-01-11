import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { cn } from '@/utils/helper/cn';

const LINK_ITEMS = [
    { to: '/topup', name: 'Top Up' },
    { to: '/transaction', name: 'Transaction' },
    { to: '/account', name: 'Akun' },
];

const Navbar = () => {
    const location = useLocation()?.pathname;

    return (
        <nav className="fixed top-0 z-10 w-full border-b border-gray-200 bg-white py-4">
            <main className="container flex items-center justify-between">
                <Link to="/home" className="flex items-center gap-2">
                    <img
                        src="/images/Logo.png"
                        alt="logo.png"
                        className="h-5 w-auto"
                    />
                    <h3 className="text-base font-semibold">SIMS PPOB</h3>
                </Link>
                <div className="flex gap-12 text-sm font-medium">
                    {LINK_ITEMS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={cn(
                                'hover:text-primary text-gray-700 transition-colors',
                                location === link.to && 'text-primary'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </main>
        </nav>
    );
};

export default Navbar;
