import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchBalance = async (url) => {
    try {
        const response = await fetcher(url);
        const balance = response?.data?.balance || 0;
        return balance;
    } catch (error) {
        return error;
    }
};

export const useGetBalance = () => {
    const { data, trigger, isLoading, error } = useSWR(
        '/balance',
        fetchBalance
    );

    return { balance: data, trigger, isLoading, error };
};
