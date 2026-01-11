import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Icon } from '@/components';
import BalanceSkeleton from '@/components/skeleton/BalanceSkeleton';
import { useGetBalance } from '@/hooks/transaction/useGetBalance';

const BalanceSection = () => {
    const { balance, isLoading } = useGetBalance();
    const [isShowBalance, setIsShowBalance] = useState(false);

    const handleClickBalance = () => {
        setIsShowBalance((prev) => !prev);
    };

    const formattedBalance = (balance) => {
        return new Intl.NumberFormat('id-ID', {
            currency: 'IDR',
        }).format(balance);
    };

    const getFormattedBalance = (balance) => {
        return isShowBalance ? `Rp ${formattedBalance(balance)}` : 'Rp *******';
    };

    if (isLoading) return <BalanceSkeleton />;

    return (
        <section className="w-[60%] rounded-xl bg-[url('/images/background_saldo.png')] bg-top text-white">
            <div className="flex h-full flex-col justify-between p-4">
                <p className="text-xs">Saldo anda</p>
                <h1 className="text-2xl font-medium">
                    {getFormattedBalance(balance)}
                </h1>
                <div
                    onClick={handleClickBalance}
                    className="flex cursor-pointer items-center gap-2 text-xs"
                >
                    <p>{isShowBalance ? 'Tutup Saldo' : 'Lihat Saldo'}</p>
                    <Icon src={isShowBalance ? <FiEye /> : <FiEyeOff />} />
                </div>
            </div>
        </section>
    );
};

export default BalanceSection;
