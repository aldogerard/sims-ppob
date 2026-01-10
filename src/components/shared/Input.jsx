import React from 'react';

import { cn } from '@/utils/helper/cn';

import Icon from './Icon';

const Input = ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    className,
    leftIcon,
    rightIcon,
    appearance,
    errorMessage,
}) => {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label
                    className={cn('mb-1 font-bold', appearance?.labelClassName)}
                    htmlFor={name}
                >
                    {label}
                </label>
            )}

            <div
                className={cn(
                    'flex flex-row gap-2 rounded-xs border border-gray-300 px-4 py-2',
                    errorMessage && 'border-error'
                )}
            >
                {leftIcon && (
                    <div
                        className={cn(
                            'mr-2 flex items-center',
                            leftIcon.className,
                            errorMessage && 'text-error!'
                        )}
                    >
                        <Icon
                            src={leftIcon.src}
                            height={16}
                            width={16}
                            onClick={leftIcon?.onClick}
                            className={leftIcon.className}
                        />
                    </div>
                )}

                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={cn(
                        'flex-1 border-none text-sm focus:outline-none',
                        className
                    )}
                />

                {rightIcon && (
                    <div
                        className={cn(
                            'flex items-center gap-2',
                            rightIcon.className
                        )}
                    >
                        <Icon
                            src={rightIcon.src}
                            height={16}
                            width={16}
                            onClick={rightIcon?.onClick}
                            className={rightIcon.className}
                        />
                    </div>
                )}
            </div>

            {errorMessage && (
                <p
                    className={cn(
                        'text-primary text-right text-xs',
                        appearance?.errorMessageClassName
                    )}
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default Input;
