import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const putProfile = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.put(url, arg);
        return response?.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const usePutProfile = () => {
    const { trigger, isLoading, error } = useSWRMutation(
        '/profile/update',
        putProfile
    );

    return { trigger, isLoading, error };
};
