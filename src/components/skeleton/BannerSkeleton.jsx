import React from 'react';

const BannerSkeleton = () => {
    return (
        <section className="animate-pulse space-y-4">
            <div className="h-4 w-40 rounded-lg bg-gray-200"></div>
            <div className="grid grid-cols-3 gap-4">
                {Array(3)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index}>
                            <div className="h-40 w-auto rounded-lg bg-gray-200" />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default BannerSkeleton;
