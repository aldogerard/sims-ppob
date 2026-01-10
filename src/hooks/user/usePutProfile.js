import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const putProfile = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.put(url, arg);

        const token = response?.data?.data?.token;
        localStorage.setItem('token', token);

        return response;
    } catch (error) {
        return error;
    }
};

export const usePutProfile = () => {
    const { trigger, isMutating, error } = useSWRMutation(
        '/profile/update',
        putProfile
    );

    return { trigger, isLoading: isMutating, error };
};
