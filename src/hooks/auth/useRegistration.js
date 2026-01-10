import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postRegistration = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        return response?.data;
    } catch (error) {
        return error?.response?.data;
    }
};

export const useRegistration = () => {
    const { trigger, isMutating, error } = useSWRMutation(
        '/registration',
        postRegistration
    );

    return { trigger, isLoading: isMutating, error };
};
