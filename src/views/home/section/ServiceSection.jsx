import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ServiceSkeleton from '@/components/skeleton/ServiceSkeleton';
import { useGetServices } from '@/hooks/information/useGetServices';
import { setCurrentService } from '@/store/feature/serviceSlice';

const ServiceSection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { services, isLoading } = useGetServices();

    const handleClick = (service) => {
        dispatch(setCurrentService(service));
        navigate(`/purchase`);
    };

    if (isLoading) return <ServiceSkeleton />;

    return (
        <section className="grid w-full grid-cols-12 gap-2">
            {services?.map((service) => (
                <div
                    key={service?.service_code}
                    onClick={() => handleClick(service)}
                    className="flex w-[80%] cursor-pointer flex-col items-center gap-1"
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
