import React from 'react';

import ServiceSkeleton from '@/components/skeleton/ServiceSkeleton';
import { useGetServices } from '@/hooks/information/useGetServices';

const ServiceSection = () => {
    const { services, isLoading } = useGetServices();

    if (isLoading) return <ServiceSkeleton />;

    return (
        <section className="grid w-full grid-cols-12 gap-2">
            {services?.map((service) => (
                <div
                    key={service?.service_code}
                    className="flex w-[80%] flex-col items-center gap-1"
                >
                    <img
                        src={service?.service_icon}
                        alt={service?.service_name}
                    />
                    <p className="line-clamp-2 w-full text-center text-[10px] font-medium text-gray-700">
                        {service?.service_name}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default ServiceSection;
