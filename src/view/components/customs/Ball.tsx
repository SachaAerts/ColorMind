import { cn } from "@/model/lib/utils.ts";
import {CircleQuestionMark} from "lucide-react";

interface PegProps {
    color: string;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    isInteractive?: boolean;
    isMysteryBall?: boolean;
    isSelected?: boolean;
}

const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
};

export default function Ball({ color, onClick, size = 'md', isInteractive = false, isMysteryBall = false, isSelected = false }: PegProps) {
    const baseClasses = cn(
        'ball rounded-full transition-all duration-200',
        sizeClasses[size],
        color,
        isInteractive && 'cursor-pointer hover:scale-110 active:scale-95',
        isMysteryBall && 'flex items-center justify-center',
        isSelected && 'ring-4 ring-primary ring-offset-2 ring-offset-background scale-110 animate-pulse'
    );

    return <>
        {isMysteryBall ? (
            <button
                type="button"
                className={baseClasses}
                onClick={onClick}
                disabled={!isInteractive}
            >
                <CircleQuestionMark className="h-5 w-auto" />
            </button>
        ) : (
            <button
                type="button"
                className={baseClasses}
                onClick={onClick}
                disabled={!isInteractive}
            />
        )}
    </>
};