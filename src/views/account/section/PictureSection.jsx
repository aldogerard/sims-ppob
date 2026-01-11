import React from 'react';
import { BiSolidPencil } from 'react-icons/bi';

import { Icon } from '@/components';
import { useGetProfile } from '@/hooks/user/useGetProfile';
import { usePutProfileImage } from '@/hooks/user/usetPutProfileImage';

const DEFAULT_PROFILE_IMAGE = '/images/profile_photo.png';

const PictureSection = () => {
    const { profile, isLoading, mutate } = useGetProfile();
    const { trigger: putProfileImage } = usePutProfileImage();

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

    const handleChangePicture = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const response = await putProfileImage({ file });
        console.log(response);
        mutate();
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="flex flex-col items-center justify-center space-y-4">
            <div className="relative h-32 w-32 rounded-full border border-gray-300">
                <img
                    src={validateProfileImage(profile?.profile_image)}
                    alt="User Avatar"
                    className="h-full w-full cursor-pointer rounded-full object-cover"
                />
                <label
                    htmlFor="profile-image"
                    className="absolute right-1 bottom-1 cursor-pointer rounded-full border border-gray-300 bg-white p-1"
                >
                    <Icon src={<BiSolidPencil className="text-sm" />} />
                </label>
                <input
                    type="file"
                    id="profile-image"
                    onChange={handleChangePicture}
                    className="hidden"
                />
            </div>
            <div>
                <h1 className="text-xl font-semibold">
                    {getFullName(profile)}
                </h1>
            </div>
        </section>
    );
};

export default PictureSection;
