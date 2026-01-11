import React from 'react';

const ProfileSkeleton = () => {
    return (
        <section className="animate-pulse space-y-2">
            <div className="h-12 w-12 rounded-full bg-gray-200"></div>
            <div className="h-5 w-28 rounded-md bg-gray-200"></div>
            <div className="h-7 w-48 rounded-md bg-gray-200"></div>
        </section>
    );
};

export default ProfileSkeleton;
