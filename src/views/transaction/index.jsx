import React from 'react';

import { BalanceSection, ProfileSection } from '@/components';

import HistorySection from './section/HistorySection';

const TransactionView = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="flex justify-between">
                <ProfileSection />
                <BalanceSection />
            </div>
            <HistorySection />
        </section>
    );
};

export default TransactionView;
