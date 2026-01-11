import React from 'react';

const ServiceSkeleton = () => {
    return (
        <section className="flex w-full animate-pulse justify-between gap-2">
            {Array(12)
                .fill(0)
                .map((_, index) => (
                    <div
                        key={index}
                        className="x flex w-16 flex-col items-center gap-1"
                    >
                        <div className="h-12 w-full rounded-lg bg-gray-200" />
                        <div className="h-3 w-12 rounded-lg bg-gray-200" />
                    </div>
                ))}
        </section>
    );
};

export default ServiceSkeleton;
