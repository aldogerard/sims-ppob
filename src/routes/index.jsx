import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@/layouts/authLayout';
import BaseLayout from '@/layouts/BaseLayout';

const routes = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <div>Login</div>,
            },
        ],
    },

    {
        element: <BaseLayout />,
        children: [
            {
                path: '/home',
                element: <div>Home</div>,
            },
            {
                path: '/topup',
                element: <div>Topup</div>,
            },
            {
                path: '/transaction',
                element: <div>Transaction</div>,
            },
            {
                path: '/account',
                element: <div>Account</div>,
            },
        ],
    },
];

export const AppRouter = () => {
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default AppRouter;
