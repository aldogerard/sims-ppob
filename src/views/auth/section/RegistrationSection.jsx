import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {
    MdAlternateEmail,
    MdLockOutline,
    MdOutlinePerson,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '@/components';
import { useRegistration } from '@/hooks/auth/useRegistration';
import { showAlert } from '@/store/feature/alertSlice';
import {
    removeRegistrationErrors,
    resetRegistration,
    setRegistrationCredential,
    setRegistrationErrors,
} from '@/store/feature/authSlice';
import { validateRegistration } from '@/utils/validation/validateRegistration';

const RegistrationSection = () => {
    const dispatch = useDispatch();

    const { email, password, confirmPassword, firstName, lastName, errors } =
        useSelector((state) => state.auth.registrationCredential);

    const { trigger, isLoading } = useRegistration();

    const [showPassword, setShowPassword] = useState({
        isShowPassword: false,
        isShowConfirmPassword: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(removeRegistrationErrors({ name }));
        dispatch(setRegistrationCredential({ name, value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateRegistration(
            email,
            firstName,
            lastName,
            password,
            confirmPassword
        );

        if (Object.keys(errors).length > 0) {
            dispatch(setRegistrationErrors(errors));
            return;
        }

        const response = await trigger({
            email,
            password,
            first_name: firstName,
            last_name: lastName,
        });

        const status = response?.status;
        const message = response?.message;

        if (status === 0) {
            dispatch(resetRegistration());
        }

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
                    errorMessage={errors?.email || ''}
                />

                <Input
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="nama depan"
                    leftIcon={{
                        src: <MdOutlinePerson />,
                        className: firstName
                            ? 'text-gray-800'
                            : 'text-gray-400',
                    }}
                    errorMessage={errors?.firstName || ''}
                />

                <Input
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="nama belakang"
                    leftIcon={{
                        src: <MdOutlinePerson />,
                        className: lastName ? 'text-gray-800' : 'text-gray-400',
                    }}
                    errorMessage={errors?.lastName || ''}
                />

                <Input
                    name="password"
                    type={showPassword.isShowPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange}
                    placeholder="password anda"
                    leftIcon={{
                        src: <MdLockOutline />,
                        className: password ? 'text-gray-800' : 'text-gray-400',
                    }}
                    rightIcon={{
                        src: showPassword.isShowPassword ? (
                            <FiEyeOff />
                        ) : (
                            <FiEye />
                        ),
                        className: 'text-gray-400 cursor-pointer',
                        onClick: () => {
                            setShowPassword((prevState) => ({
                                ...prevState,
                                isShowPassword: !prevState.isShowPassword,
                            }));
                        },
                    }}
                    errorMessage={errors?.password || ''}
                />

                <Input
                    name="confirmPassword"
                    type={
                        showPassword.isShowConfirmPassword ? 'text' : 'password'
                    }
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder="password konfirmasi"
                    leftIcon={{
                        src: <MdLockOutline />,
                        className: confirmPassword
                            ? 'text-gray-800'
                            : 'text-gray-400',
                    }}
                    rightIcon={{
                        src: showPassword.isShowConfirmPassword ? (
                            <FiEyeOff />
                        ) : (
                            <FiEye />
                        ),
                        className: 'text-gray-400 cursor-pointer',
                        onClick: () => {
                            setShowPassword((prevState) => ({
                                ...prevState,
                                isShowConfirmPassword:
                                    !prevState.isShowConfirmPassword,
                            }));
                        },
                    }}
                    errorMessage={errors?.confirmPassword || ''}
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

export default RegistrationSection;
