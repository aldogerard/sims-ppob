import { useDispatch, useSelector } from 'react-redux';

import { hideAlert } from '@/store/feature/alertSlice';
import { cn } from '@/utils/helper/cn';

const alertStyle = {
    warning: 'bg-red-50 text-red-400',
};

const Alert = () => {
    const dispatch = useDispatch();
    const { isOpen, type, message } = useSelector((state) => state.alert);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-10 left-5 z-50 w-[47%]">
            <div
                className={cn(
                    'flex items-center justify-between gap-4 rounded px-4 py-3 text-sm font-medium',
                    alertStyle[type]
                )}
            >
                <span>{message}</span>
                <button
                    onClick={() => dispatch(hideAlert())}
                    className="cursor-pointer"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Alert;
