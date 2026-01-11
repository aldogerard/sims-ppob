import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchServices = async (url) => {
    try {
        const response = await fetcher(url);
        const services = response?.data;
        return services;
    } catch (error) {
        return error;
    }
};

export const useGetServices = () => {
    const { data, trigger, isLoading, error } = useSWR(
        '/services',
        fetchServices
    );

    return { services: data, trigger, isLoading, error };
};
