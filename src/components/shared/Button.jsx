import React from 'react';

import { cn } from '@/utils/helper/cn';

const Button = ({ name, type, disabled, className, variant, onClick }) => {
    const variantColors = {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-primary border border-primary',
        default: '',
    };

    const variantClass = variant
        ? variantColors[variant]
        : variantColors.primary;

    return (
        <button
            type={type}
            className={cn(
                'cursor-pointer rounded-xs px-4 py-2 text-sm font-medium',
                className,
                variantClass,
                disabled && 'cursor-not-allowed bg-gray-300'
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;
