import useSWR from 'swr';

import { fetcher } from '@/lib/axios';

const fetchBanner = async (url) => {
    try {
        const response = await fetcher(url);
        const banners = response?.data;
        return banners;
    } catch (error) {
        return error;
    }
};

export const useGetBanner = () => {
    const { data, trigger, isLoading, error } = useSWR('/banner', fetchBanner);

    return { banners: data, trigger, isLoading, error };
};
