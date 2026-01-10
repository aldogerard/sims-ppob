import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@/components';
import { useLogin } from '@/hooks/auth/useLogin';
import { showAlert } from '@/store/feature/alertSlice';
import { setLoginCredential } from '@/store/feature/authSlice';

const LoginSection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { email, password } = useSelector(
        (state) => state.auth.loginCredential
    );

    const { trigger, isLoading } = useLogin();

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setLoginCredential({ name, value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) return;

        const response = await trigger({ email, password });
        const status = response?.status;

        if (status === 0) {
            return navigate('/home', { replace: true });
        }

        const message =
            status === 103
                ? 'password yang anda masukkan salah'
                : 'format email yang anda masukkan salah';

        dispatch(
            showAlert({
                type: 'warning',
                message,
            })
        );
    };

    return (
        <main className="w-96 space-y-9">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="masukkan email anda"
                    leftIcon={{
                        src: <MdAlternateEmail />,
                        className: email ? 'text-gray-800' : 'text-gray-400',
                    }}
                />

                <Input
                    name="password"
                    type={isShowPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange}
                    placeholder="masukkan password anda"
                    leftIcon={{
                        src: <MdLockOutline />,
                        className: password ? 'text-gray-800' : 'text-gray-400',
                    }}
                    rightIcon={{
                        src: isShowPassword ? <FiEyeOff /> : <FiEye />,
                        className: 'text-gray-400 cursor-pointer',
                        onClick: () => {
                            setIsShowPassword((prevState) => !prevState);
                        },
                    }}
                />

                <Button
                    name={isLoading ? 'Loading...' : 'Masuk'}
                    type="submit"
                    disabled={isLoading}
                    className="mt-2 w-full cursor-pointer"
                />
            </form>
        </main>
    );
};

export default LoginSection;
