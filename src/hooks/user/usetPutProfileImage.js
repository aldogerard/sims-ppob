import useSWRMutation from 'swr/mutation';

import { apiClient } from '@/lib/axios';

const putProfileImage = async (url, file) => {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await apiClient.put(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const usePutProfileImage = () => {
    const { trigger, isMutating, error } = useSWRMutation(
        '/profile/image',
        putProfileImage
    );

    return { trigger, isLoading: isMutating, error };
};
