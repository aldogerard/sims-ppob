import React from 'react';

import { cn } from '@/utils/helper/cn';

const Button = ({ name, type, disabled, className, variant, onClick }) => {
    const variantColors = {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-white',
        default: '',
    };

    const variantClass = variant
        ? variantColors[variant]
        : variantColors.primary;

    return (
        <button
            type={type}
            className={cn(
                'rounded-xs px-4 py-1.75 font-semibold',
                className,
                variantClass
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
};

export default Button;
