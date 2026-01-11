import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postTopUp = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        return response?.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const usePostTopUp = () => {
    const { trigger, isLoading, error } = useSWRMutation('/topup', postTopUp);

    return { trigger, isLoading, error };
};
