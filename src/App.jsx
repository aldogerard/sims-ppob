import React from 'react';

import { useLogin } from './hooks/auth/use-login';

const App = () => {
    const { trigger, isLoading, error } = useLogin();

    const handleClick = () => {
        trigger({
            email: 'user@nutech-integrasi.com',
            password: 'abcdef1234',
        });
    };

    return (
        <section>
            <button onClick={handleClick}>Login</button>
        </section>
    );
};

export default App;
