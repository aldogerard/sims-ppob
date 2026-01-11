import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import BaseLayout from '@/layouts/BaseLayout';
import AccountPage from '@/pages/AccountPage';
import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage';
import PurchasePage from '@/pages/PurchasePage';
import TopupPage from '@/pages/TopupPage';
import TransactionPage from '@/pages/TransactionPage';

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
                path: '/purchase',
                element: <PurchasePage />,
            },
            {
                path: '/topup',
                element: <TopupPage />,
            },
            {
                path: '/transaction',
                element: <TransactionPage />,
            },
            {
                path: '/account',
                element: <AccountPage />,
            },
        ],
    },
];

export const AppRouter = () => {
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default AppRouter;
