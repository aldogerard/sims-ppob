import { useDispatch, useSelector } from 'react-redux';

import { ActionType } from '@/constant/actionType';
import { ModalType } from '@/constant/modalType';
import { useGetBalance } from '@/hooks/transaction/useGetBalance';
import { usePostTopUp } from '@/hooks/transaction/usePostTopUp';
import { usePostTransaction } from '@/hooks/transaction/usePostTransaction';
import { hideModal, showModal } from '@/store/feature/modalSlice';

const Modal = () => {
    const dispatch = useDispatch();

    const { trigger: topUp } = usePostTopUp();
    const { trigger: buy } = usePostTransaction();

    const { mutate: getBalance } = useGetBalance();
    const { currentService } = useSelector((state) => state.service);

    const { isOpen, type, message, price, actionType, actionText } =
        useSelector((state) => state.modal);

    const formattedPrice = (value) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    const getIcon = {
        [ModalType.SUCCESS]: '/images/success.png',
        [ModalType.FAILED]: '/images/failed.png',
        [ModalType.CONFIRM]: '/images/Logo.png',
    };
    const icon = getIcon[type];

    const getStatus = {
        [ModalType.SUCCESS]: 'berhasil',
        [ModalType.FAILED]: 'gagal',
    };
    const status = getStatus[type];

    const handleTopUp = async () => {
        const response = await topUp({ top_up_amount: price });
        const status = response?.status;

        if (status === 0) {
            await getBalance();
            return dispatch(
                showModal({
                    type: ModalType.SUCCESS,
                    price: price,
                    message: 'Top Up sebesar',
                    actionText: 'Kembali ke Beranda',
                })
            );
        }
        return dispatch(
            showModal({
                type: ModalType.FAILED,
                price: price,
                message: 'Top Up sebesar',
                actionText: 'Kembali ke Beranda',
            })
        );
    };

    const handleBuy = async () => {
        const response = await buy({
            service_code: currentService?.service_code,
        });
        const status = response?.status;

        if (status === 0) {
            await getBalance();
            return dispatch(
                showModal({
                    type: ModalType.SUCCESS,
                    price: price,
                    message: `Pembayaran ${currentService?.service_name} sebesar`,
                    actionText: 'Kembali ke Beranda',
                })
            );
        }
        return dispatch(
            showModal({
                type: ModalType.FAILED,
                price: price,
                message: `Pembayaran ${currentService?.service_name} sebesar`,
                actionText: 'Kembali ke Beranda',
            })
        );
    };

    const handleClickAction = () => {
        dispatch(hideModal());

        if (actionType === ActionType.TOP_UP) {
            return handleTopUp();
        }

        if (actionType === ActionType.BUY) {
            return handleBuy();
        }
    };

    if (!isOpen) return null;

    return (
        <section className="absolute inset-0 z-50 flex items-center justify-center bg-black/20">
            <div className="flex min-w-60 flex-col items-center justify-center gap-2 rounded-md bg-white p-6">
                <img src={icon} alt={type} className="mb-2 h-10 w-auto" />
                <p className="-mb-2 text-xs text-gray-700">{message}</p>
                <p className="text-xl font-semibold">
                    {formattedPrice(price)} {type === ModalType.CONFIRM && '?'}
                </p>
                {type !== ModalType.CONFIRM && (
                    <p className="-mt-2 text-xs">{status}</p>
                )}
                <p
                    onClick={handleClickAction}
                    className="text-primary my-2 cursor-pointer text-xs font-semibold"
                >
                    {actionText}
                </p>
                {type === ModalType.CONFIRM && (
                    <p
                        onClick={() => dispatch(hideModal())}
                        className="cursor-pointer text-xs font-semibold text-gray-300"
                    >
                        Batalkan
                    </p>
                )}
            </div>
        </section>
    );
};

export default Modal;
