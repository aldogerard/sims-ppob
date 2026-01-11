import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchTransactions = async (url) => {
    try {
        const response = await fetcher(url);
        const transaction = response?.data || {};
        return transaction;
    } catch (error) {
        return error;
    }
};

export const useGetTransactions = (limit = 5, offset = 0) => {
    const url = `/transaction/history?limit=${limit}&offset=${offset}`;
    const { data, mutate, isLoading, error } = useSWR(url, fetchTransactions);

    return { transaction: data, mutate, isLoading, error };
};
