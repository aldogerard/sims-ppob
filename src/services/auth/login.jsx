import { fetcherMutation } from '@/lib/axios';

export const login = async (url, { arg }) => {
    try {
        const response = await fetcherMutation.post(url, arg);
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
};
