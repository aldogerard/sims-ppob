import React, { useState } from 'react';
import { MdMoney } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { Button, Input } from '@/components';
import { ActionType } from '@/constant/actionType';
import { ModalType } from '@/constant/modalType';
import { showModal } from '@/store/feature/modalSlice';
import { cn } from '@/utils/helper/cn';

const PRICE_ITEMS = [
    { value: 10000, label: 'Rp10.000' },
    { value: 20000, label: 'Rp20.000' },
    { value: 50000, label: 'Rp50.000' },
    { value: 100000, label: 'Rp100.000' },
    { value: 250000, label: 'Rp250.000' },
    { value: 1000000, label: 'Rp1.000.000' },
];

const PricingSection = () => {
    const dispatch = useDispatch();

    const [nominal, setNominal] = useState(0);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        const rawValue = inputValue.replace(/[\D]/g, '');

        setNominal(rawValue);
    };

    const handlePriceClick = (value) => {
        setNominal(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNominal(0);
        dispatch(
            showModal({
                type: ModalType.CONFIRM,
                price: nominal,
                message: 'Anda yakin untuk Top Up sebesar',
                actionText: 'Ya, lanjutkan Top Up',
                actionType: ActionType.TOP_UP,
            })
        );
    };

    return (
        <section className="flex flex-row justify-between">
            <form onSubmit={handleSubmit} className="w-[59%] space-y-4">
                <Input
                    name="topup"
                    type="text"
                    inputMode="numeric"
                    placeholder="Masukan nominal top up"
                    leftIcon={{
                        src: <MdMoney />,
                        className: nominal ? 'text-gray-800' : 'text-gray-400',
                    }}
                    value={nominal}
                    onChange={handleChange}
                    formatNumber={true}
                    min={0}
                />
                <Button
                    name="Top Up"
                    type="submit"
                    className="w-full"
                    disabled={nominal < 10000 || nominal > 1000000}
                >
                    Top Up
                </Button>
            </form>
            <aside className="grid w-[39%] grid-cols-3 gap-4">
                {PRICE_ITEMS?.map((item) => (
                    <div
                        key={item.value}
                        onClick={() => handlePriceClick(item.value)}
                        className={cn(
                            'flex h-full w-full cursor-pointer items-center justify-center border border-gray-300',
                            nominal === item.value && 'bg-gray-200'
                        )}
                    >
                        <p className="text-sm font-medium text-gray-700">
                            {item.label}
                        </p>
                    </div>
                ))}
            </aside>
        </section>
    );
};

export default PricingSection;
