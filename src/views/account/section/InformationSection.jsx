import React, { useEffect, useState } from 'react';
import { MdAlternateEmail, MdOutlinePerson } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '@/components';
import { useGetProfile } from '@/hooks/user/useGetProfile';
import { usePutProfile } from '@/hooks/user/usePutProfile';
import {
    removeRegistrationErrors,
    setRegistrationCredential,
    setRegistrationCredentialForProfile,
    setRegistrationErrors,
} from '@/store/feature/authSlice';
import { validateProfile } from '@/utils/validation/validateRegistration';

const InformationSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { profile, isLoading, mutate } = useGetProfile();
    const { trigger: putProfile } = usePutProfile();

    const { email, firstName, lastName, errors } = useSelector(
        (state) => state.auth.registrationCredential
    );

    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            dispatch(setRegistrationCredentialForProfile(profile));
        }
    }, [dispatch, isLoading, profile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(removeRegistrationErrors({ name }));
        dispatch(setRegistrationCredential({ name, value }));
    };

    const handleSave = async () => {
        const errors = validateProfile(firstName, lastName);

        if (Object.keys(errors).length > 0) {
            dispatch(setRegistrationErrors(errors));
            return;
        }

        const response = await putProfile({
            first_name: firstName,
            last_name: lastName,
        });

        if (response?.status === 0) {
            mutate();
        } else {
            dispatch(setRegistrationCredentialForProfile(profile));
        }

        setIsEdit(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="w-160 space-y-4">
            <Input
                name="email"
                type="email"
                value={email}
                placeholder="masukkan email anda"
                leftIcon={{
                    src: <MdAlternateEmail />,
                    className: email ? 'text-gray-800' : 'text-gray-400',
                }}
                errorMessage={errors?.email || ''}
                disabled={true}
            />

            <Input
                name="firstName"
                type="text"
                value={firstName}
                onChange={handleChange}
                placeholder="nama depan"
                leftIcon={{
                    src: <MdOutlinePerson />,
                    className: firstName ? 'text-gray-800' : 'text-gray-400',
                }}
                errorMessage={errors?.firstName || ''}
                disabled={!isEdit}
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
                disabled={!isEdit}
            />

            {isEdit && (
                <Button
                    name="Simpan"
                    variant="primary"
                    onClick={handleSave}
                    className="w-full"
                />
            )}

            {!isEdit && (
                <>
                    <Button
                        name="Edit Profil"
                        variant="primary"
                        onClick={() => setIsEdit(true)}
                        className="w-full"
                    />
                    <Button
                        name="Logout"
                        variant="secondary"
                        onClick={handleLogout}
                        className="w-full"
                    />
                </>
            )}
        </section>
    );
};

export default InformationSection;
