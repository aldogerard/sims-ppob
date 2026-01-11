import React, { useState } from 'react';

import { ActionType } from '@/constant/actionType';
import { useGetTransactions } from '@/hooks/transaction/useGetTransactions';
import { cn } from '@/utils/helper/cn';

const HistorySection = () => {
    const limit = 5;
    const [offset, setOffset] = useState(0);

    const { transaction, isLoading } = useGetTransactions(limit, offset);

    const formattedDate = (date) => {
        const formattedDate = new Date(date).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            timeZoneName: 'short',
        });

        return formattedDate.replace('pukul', '');
    };

    const formattedPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            currency: 'IDR',
            style: 'currency',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleShowMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    const handleShowLess = () => {
        if (offset >= limit) {
            setOffset((prevOffset) => Math.max(0, prevOffset - limit));
        }
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <section className="space-y-4">
            <h1 className="text-sm font-medium">Semua Transaksi</h1>

            <main className="flex flex-col gap-4">
                {transaction?.records?.map((record) => (
                    <div
                        key={record.invoice_number}
                        className="flex justify-between rounded-md border border-gray-300 px-4 py-2"
                    >
                        <div>
                            <div
                                className={cn(
                                    'flex items-center gap-2 font-semibold',
                                    record?.transaction_type ===
                                        ActionType.TOP_UP
                                        ? 'text-green-500'
                                        : 'text-amber-500'
                                )}
                            >
                                <p>
                                    {record?.transaction_type ===
                                    ActionType.TOP_UP
                                        ? '+'
                                        : '-'}
                                </p>
                                <h1>{formattedPrice(record.total_amount)}</h1>
                            </div>
                            <p className="text-[10px] text-gray-300">
                                {formattedDate(record.created_on)}
                            </p>
                        </div>
                        <p className="text-xs text-gray-600">
                            {record.description}
                        </p>
                    </div>
                ))}

                <div className="flex justify-center gap-4">
                    {offset > 0 && (
                        <h1
                            onClick={handleShowLess}
                            className="cursor-pointer text-center text-xs font-semibold text-rose-700"
                        >
                            Show less
                        </h1>
                    )}
                    <h1
                        onClick={handleShowMore}
                        className="cursor-pointer text-center text-xs font-semibold text-rose-700"
                    >
                        Show more
                    </h1>
                </div>
            </main>
        </section>
    );
};

export default HistorySection;
