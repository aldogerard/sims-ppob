import axios from 'axios';

const axiosInstance = (baseUrl) => {
    const instance = axios.create({
        baseURL: baseUrl,
    });

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    });

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // if (error.response && error.response.status === 401) {
            //     localStorage.removeItem('token');
            //     window.location.href = '/';
            // }
            return Promise.reject(error);
        }
    );

    return instance;
};

export const apiClient = axiosInstance(import.meta.env.VITE_BASE_URL || '');

export const fetcher = (url) => apiClient.get(url).then((res) => res.data);

export const fetcherMutation = {
    post: (url, data) => apiClient.post(url, data),
    put: (url, data) => apiClient.put(url, data),
    delete: (url) => apiClient.delete(url),
};
