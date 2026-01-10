import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postTopUp = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        return response;
    } catch (error) {
        return error;
    }
};

export const useTopUp = () => {
    const { trigger, isMutating, error } = useSWRMutation('/topup', postTopUp);

    return { trigger, isLoading: isMutating, error };
};
