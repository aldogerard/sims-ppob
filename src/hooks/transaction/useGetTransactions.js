import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchTransactions = async (url) => {
    try {
        const response = await fetcher(url);
        const transaction = response?.data?.data || {};
        return transaction;
    } catch (error) {
        return error;
    }
};

export const useGetTransaction = () => {
    const { data, trigger, isMutating, error } = useSWR(
        '/transaction/history',
        fetchTransactions
    );

    return { Transaction: data, trigger, isLoading: isMutating, error };
};
