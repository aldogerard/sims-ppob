import React, { useRef } from 'react';

import BannerSkeleton from '@/components/skeleton/BannerSkeleton';
import { useGetBanner } from '@/hooks/information/useGetBanner';

const BannerSection = () => {
    const { banners, isLoading } = useGetBanner();

    const ref = useRef(null);

    const onWheel = (e) => {
        if (ref.current) {
            ref.current.scrollLeft += e.deltaY;
        }
    };

    if (isLoading) return <BannerSkeleton />;

    return (
        <section className="space-y-4">
            <h1 className="text-sm font-medium">Temukan promo menarik</h1>
            <div
                ref={ref}
                onWheel={onWheel}
                className="scrollbar-hide absolute right-4 left-4 flex flex-nowrap gap-4 overflow-x-auto scroll-smooth"
            >
                {banners?.map((banner) => (
                    <div key={banner.banner_name} className="shrink-0">
                        <img
                            src={banner.banner_image}
                            alt={banner.banner_name}
                            className="h-40 w-auto rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BannerSection;
