import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postTransaction = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        return response?.data?.data;
    } catch (error) {
        return error;
    }
};

export const useTopUp = () => {
    const { trigger, isMutating, error } = useSWRMutation(
        '/transaction',
        postTransaction
    );

    return { trigger, isLoading: isMutating, error };
};
