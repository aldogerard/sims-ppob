import React from 'react';
import { useSelector } from 'react-redux';

const TitleSection = () => {
    const { currentService } = useSelector((state) => state.service);

    return (
        <div className="space-y-1">
            <p className="text-sm text-gray-700">Pembayaran</p>
            <div className="flex items-center gap-2">
                <img
                    src={currentService?.service_icon}
                    alt={currentService?.service_name}
                    className="h-6 w-auto"
                />
                <h1 className="text-xl font-medium">
                    {currentService?.service_name}
                </h1>
            </div>
        </div>
    );
};

export default TitleSection;
