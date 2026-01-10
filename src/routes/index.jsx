import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import BaseLayout from '@/layouts/BaseLayout';
import AuthPages from '@/pages/AuthPages';

const routes = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <AuthPages />,
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
