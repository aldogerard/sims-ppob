import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="border-b border-gray-200 py-4">
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
                    <Link to="/topup">Top Up</Link>
                    <Link to="/transaction">Transaction</Link>
                    <Link to="/account">Akun</Link>
                </div>
            </main>
        </nav>
    );
};

export default Navbar;
