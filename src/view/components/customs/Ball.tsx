import { cn } from "../../../model/lib/utils.ts";

interface PegProps {
    color: string;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    isInteractive?: boolean;
}

const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
};

export default function Ball({ color, onClick, size = 'md', isInteractive = false }: PegProps) {
    const baseClasses = cn(
        'ball rounded-full transition-all duration-200',
        sizeClasses[size],
        color,
        isInteractive && 'cursor-pointer hover:scale-110 active:scale-95',
    );

    return (
        <button
            type="button"
            className={baseClasses}
            onClick={onClick}
            disabled={!isInteractive}
        />
    );
};