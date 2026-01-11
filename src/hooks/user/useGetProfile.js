import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchProfile = async (url) => {
    try {
        const response = await fetcher(url);
        const profile = response?.data;
        return profile;
    } catch (error) {
        return error;
    }
};

export const useGetProfile = () => {
    const { data, trigger, isLoading, error } = useSWR('profile', fetchProfile);
    return { profile: data, trigger, isLoading, error };
};
