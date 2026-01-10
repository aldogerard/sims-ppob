import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchServices = async (url) => {
    try {
        const response = await fetcher(url);
        const services = response?.data?.data;
        return services;
    } catch (error) {
        return error;
    }
};

export const useGetBanner = () => {
    const { data, trigger, isMutating, error } = useSWR(
        '/banner',
        fetchServices
    );

    return { services: data, trigger, isLoading: isMutating, error };
};
