import React from 'react';

import ProfileSkeleton from '@/components/skeleton/ProfileSkeleton';
import { useGetProfile } from '@/hooks/user/useGetProfile';

const DEFAULT_PROFILE_IMAGE = '/images/profile_photo.png';

const ProfileSection = () => {
    const { profile, isLoading } = useGetProfile();

    const validateProfileImage = (url) => {
        if (typeof url !== 'string' || !url.trim()) {
            return DEFAULT_PROFILE_IMAGE;
        }

        const lastUrlName = url.split('/').pop();
        return lastUrlName === 'null' ? DEFAULT_PROFILE_IMAGE : url;
    };

    const getFullName = (user) => {
        return `${user?.first_name} ${user?.last_name}`;
    };

    if (isLoading) return <ProfileSkeleton />;

    return (
        <section className="space-y-4">
            <div className="h-14 w-14 rounded-full">
                <img
                    src={validateProfileImage(profile?.profile_image)}
                    alt="User Avatar"
                />
            </div>
            <div>
                <p className="text-sm text-gray-700">Selamat datang,</p>
                <h1 className="text-xl font-semibold">
                    {getFullName(profile)}
                </h1>
            </div>
        </section>
    );
};

export default ProfileSection;
