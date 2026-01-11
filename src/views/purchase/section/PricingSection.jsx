import React from 'react';
import { MdMoney } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '@/components';
import { ActionType } from '@/constant/actionType';
import { ModalType } from '@/constant/modalType';
import { showModal } from '@/store/feature/modalSlice';

const PricingSection = () => {
    const dispatch = useDispatch();
    const { currentService } = useSelector((state) => state.service);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(
            showModal({
                type: ModalType.CONFIRM,
                price: currentService?.service_tariff,
                message: `Beli ${currentService?.service_name} sebesar`,
                actionText: 'Ya, lanjutkan Bayar',
                actionType: ActionType.BUY,
            })
        );
    };

    return (
        <section className="flex flex-row justify-between">
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <Input
                    name="topup"
                    type="text"
                    inputMode="numeric"
                    placeholder="Masukan nominal pembayaran"
                    leftIcon={{
                        src: <MdMoney />,
                        className: 'text-gray-800',
                    }}
                    value={currentService?.service_tariff}
                    formatNumber={true}
                    min={0}
                    disabled={true}
                />
                <Button
                    name="Bayar"
                    type="submit"
                    className="w-full"
                    disabled={!currentService?.service_tariff}
                />
            </form>
        </section>
    );
};

export default PricingSection;
