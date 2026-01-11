import React from 'react';

import { BalanceSection, ProfileSection } from '@/components';

import PricingSection from './section/PricingSection';
import TitleSection from './section/TitleSection';

const TopupView = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex justify-between">
                <ProfileSection />
                <BalanceSection />
            </div>
            <TitleSection />
            <PricingSection />
        </section>
    );
};

export default TopupView;
