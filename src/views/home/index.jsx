import React from 'react';

import BalanceSection from './section/BalanceSection';
import BannerSection from './section/BannerSection';
import ProfileSection from './section/ProfileSection';
import ServiceSection from './section/ServiceSection';

const HomeView = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex justify-between">
                <ProfileSection />
                <BalanceSection />
            </div>
            <ServiceSection />
            <BannerSection />
        </section>
    );
};

export default HomeView;
