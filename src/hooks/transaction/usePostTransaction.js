import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postTransaction = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        return response?.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const usePostTransaction = () => {
    const { trigger, isLoading, error } = useSWRMutation(
        '/transaction',
        postTransaction
    );

    return { trigger, isLoading, error };
};
