import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

interface HeaderProps {
    showButton?: boolean;
    onButtonClick?: () => void;
}

export function Header({ showButton = true, onButtonClick }: HeaderProps) {
    return (<header className="sticky top-0 z-40 bg-white/90 border-b border-sky-100 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.svg"
                        alt="ANMI Logo"
                        className="h-12 w-auto"
                    />

                </div>
                {showButton && onButtonClick && (
                    <Button
                        onClick={onButtonClick}
                        className="px-4 py-2 bg-[#DB162F] hover:bg-yellow-400 text-white"
                    >
                        <ArrowRightIcon className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Usar ANMI</span>
                        <span className="sm:hidden">Usar</span>
                    </Button>
                )}
            </div>
        </header>
    );
}