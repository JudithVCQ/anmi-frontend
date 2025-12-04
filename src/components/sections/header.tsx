// src/components/sections/header.tsx

import { Button } from "../ui/button.tsx";
import { useState, useEffect } from "react";
import letraBlanca from "/letra-blanca.svg";

interface HeaderProps {
    showButton?: boolean;
    onButtonClick?: () => void;
}

export function Header({ showButton = true, onButtonClick }: HeaderProps) {
    const [activeSection, setActiveSection] = useState<string>("inicio");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Conócenos", href: "#conocenos" },
        { name: "Importancia", href: "#importancia" },
        { name: "Funcionalidades", href: "#funcionalidades" },
        { name: "Fuentes", href: "#fuentes" },
    ];

    const aprendeLinks = [
        { name: "Guías Nutricionales", href: "#guias" },
        { name: "Recetas Saludables", href: "#recetas" },
    ];

    const smoothScrollTo = (target: string, duration: number = 200) => {
        const element = document.querySelector(target);
        if (!element) return;

        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';

        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;

            const progress = duration === 0 ? 1 : Math.min(timeElapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sectionIds = [...navLinks.map(link => link.href.substring(1)), "cta"];

            for (const sectionId of sectionIds) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const iconStyleSmall = { fontSize: '16px' };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        smoothScrollTo(href, 400);
        setShowDropdown(false);
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
    };

    const [isClickNavigation, setIsClickNavigation] = useState<boolean>(false);

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeout) clearTimeout(dropdownTimeout);
        if (!isClickNavigation) {
            setShowDropdown(true);
        }
    };

    const handleDropdownMouseLeave = () => {
        setIsClickNavigation(false); // ✅ Llama la función
        const timeout = setTimeout(() => {
            setShowDropdown(false);
        }, 300);
        setDropdownTimeout(timeout);
    };



    return (
        <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md z-50 border-b-2 border-gradient shadow-sm">
            {/* Borde decorativo con gradiente de colores */}
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 opacity-60"></div>

            {/* Elementos decorativos flotantes pequeños */}
            <div className="absolute top-2 left-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute top-3 right-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-50"></div>
            <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-yellow-300 rounded-full opacity-30"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
                {/* Logo con efecto hover */}
                <a
                    href="#inicio"
                    className="flex items-center gap-3 group"
                    onClick={(e
                    ) => handleLinkClick(e, "#inicio")}
                >
                    <div className="relative">
                        <img
                            src="/logo.svg"
                            alt="ANMI Logo"
                            className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                        />
                        {/* Círculo decorativo detrás del logo */}
                        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-red-100 to-pink-100 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-125"></div>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-5 h-full">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <div key={link.name} className="h-full flex items-center">
                                <a
                                    href={link.href}
                                    onClick={(e) => handleLinkClick(e, link.href)}
                                    className={`text-sm font-bold transition-all duration-300 flex items-center relative group px-1 ${
                                        isActive
                                            ? 'text-[#DB162F]'
                                            : 'text-slate-700 hover:text-[#DB162F]'
                                    }`}
                                >
                                    {link.name}

                                    {/* Línea inferior activa con gradiente */}
                                    {isActive && (
                                        <span className="absolute -bottom-6 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-t-full shadow-sm" />
                                    )}

                                    {/* Efecto hover sutil */}
                                    {!isActive && (
                                        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-400 rounded-full group-hover:w-full transition-all duration-300" />
                                    )}
                                </a>
                            </div>
                        );
                    })}

                    {/* Dropdown Menu mejorado */}
                    <div
                        className="relative h-full flex items-center"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                    >
                        <a
                            href="#cta"
                            className={`text-sm font-bold transition-all duration-300 flex items-center gap-1 relative group px-1 ${
                                activeSection === 'cta'
                                    ? 'text-[#DB162F]'
                                    : 'text-slate-700 hover:text-[#DB162F]'
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (dropdownTimeout) clearTimeout(dropdownTimeout);

                                setIsClickNavigation(true);
                                setShowDropdown(false);

                                setTimeout(() => {
                                    smoothScrollTo('#cta', 400);
                                    setTimeout(() => setIsClickNavigation(false), 500);
                                }, 100);
                            }}

                        >


                            <span>Aprende con</span>

                            <div
                                className={`h-4 w-11 transition-all duration-300 -mt-0.5 ${
                                    activeSection === 'cta'
                                        ? 'bg-[#DB162F]'
                                        : 'bg-slate-700 group-hover:bg-[#DB162F]'
                                }`}
                                style={{
                                    maskImage: `url(${letraBlanca})`,
                                    WebkitMaskImage: `url(${letraBlanca})`,
                                    maskSize: 'contain',
                                    WebkitMaskSize: 'contain',
                                    maskRepeat: 'no-repeat',
                                    WebkitMaskRepeat: 'no-repeat',
                                    maskPosition: 'left center'
                                }}
                            />

                            {activeSection === 'cta' && (
                                <span className="absolute -bottom-6 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-t-full shadow-sm" />
                            )}

                            {!activeSection.includes('cta') && (
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-400 rounded-full group-hover:w-full transition-all duration-300" />
                            )}
                        </a>

                        {showDropdown && (
                            <div
                                className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-2xl border-2 border-t-0 border-gray-100 overflow-hidden"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                {/* Borde superior colorido en el dropdown */}
                                <div className="h-1 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400"></div>

                                {aprendeLinks.map((link, index) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className={`block px-5 py-3.5 text-sm font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-[#DB162F] transition-all duration-200 ${
                                            index !== aprendeLinks.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {link.name}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* Botón CTA mejorado */}
                {showButton && onButtonClick && (
                    <Button
                        onClick={onButtonClick}
                        className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg rounded-full font-bold transform hover:scale-105"
                    >
                        <span className="material-symbols-outlined" style={iconStyleSmall}>
                            arrow_forward
                        </span>
                        <span className="hidden sm:inline">Usar</span>
                        <img
                            src={letraBlanca}
                            alt="ANMI"
                            className="h-4 w-auto"
                            style={{ marginTop: '-0.3rem' }}
                        />

                        {/* Brillo animado */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transition-opacity duration-500 translate-x-[-100%] hover:translate-x-[100%]"></div>
                    </Button>
                )}
            </div>
        </header>
    );
}