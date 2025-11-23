import clsx from "clsx";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "outline";
}

export function Button({
                           variant = "default",
                           className,
                           ...props
                       }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6B9EBD] disabled:opacity-60 disabled:cursor-not-allowed";

    const variants = {
        default:
            "bg-[#C4E0F0] hover:bg-[#B3D4E8] text-[#27231E] shadow-sm px-4 py-2",
        outline:
            "border-2 border-[#6B9EBD] text-[#6B9EBD] bg-white hover:bg-[#6B9EBD]/10 px-4 py-2",
    };

    return (
        <button
            className={clsx(base, variants[variant], className)}
            {...props}
        />
    );
}
