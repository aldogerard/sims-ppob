import useSWRMutation from 'swr/mutation';

import { fetcherMutation } from '@/lib/axios';

const postLogin = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);

        const token = response?.data?.data?.token;
        localStorage.setItem('token', token);

        return response;
    } catch (error) {
        return error;
    }
};

export const useLogin = () => {
    const { trigger, isMutating, error } = useSWRMutation('/login', postLogin);

    return { trigger, isLoading: isMutating, error };
};
