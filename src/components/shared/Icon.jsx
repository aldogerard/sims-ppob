import SVG from 'react-inlinesvg';

import { cn } from '@/utils/helper/cn';

const Icon = ({ src, className, width, height, rotate, onClick }) => {
    const isStringSrc = typeof src === 'string';

    const content = isStringSrc ? (
        <SVG
            cacheRequests
            src={src}
            width={width}
            height={height}
            className={cn(className, rotate && `rotate-${rotate}`)}
        />
    ) : (
        src
    );

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={cn(
                    className,
                    'inline-flex items-center justify-center'
                )}
                style={{ width, height }}
            >
                {content}
            </button>
        );
    }

    return content;
};

export default Icon;
