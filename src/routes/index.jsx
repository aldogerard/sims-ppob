import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import BaseLayout from '@/layouts/BaseLayout';
import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage';
import TopupPage from '@/pages/TopupPage';

const routes = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <AuthPage />,
            },
        ],
    },

    {
        element: <BaseLayout />,
        children: [
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                path: '/topup',
                element: <TopupPage />,
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
