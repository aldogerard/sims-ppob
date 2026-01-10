import useSWRMutation from 'swr/mutation';

import { login } from '@/services/auth/login';

export const useLogin = () => {
    const { trigger, isMutating, error } = useSWRMutation('/login', login);

    return { trigger, isLoading: isMutating, error };
};
