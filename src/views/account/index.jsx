import React from 'react';

import InformationSection from './section/InformationSection';
import PictureSection from './section/PictureSection';

const AccountView = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-6">
            <PictureSection />
            <InformationSection />
        </section>
    );
};

export default AccountView;
