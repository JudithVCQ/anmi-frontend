// src/components/sections/header.tsx

import { Button } from "../ui/button.tsx";

interface HeaderProps {
    showButton?: boolean;
    onButtonClick?: () => void;
}

export function Header({ showButton = true, onButtonClick }: HeaderProps) {
    // Definición de enlaces de navegación (anclajes)
    // AJUSTADO: Se usan los IDs de las secciones definidas en landing-page.tsx
    const navLinks = [
        { name: "Inicio", href: "#inicio" },
        { name: "Conócenos", href: "#conocenos" },
        { name: "Importancia", href: "#importancia" },
        // Eliminado 'Etapas' y ajustados los demás para coincidir con el orden del scroll.
        { name: "Funcionalidades", href: "#funcionalidades" },
        { name: "Fuentes", href: "#fuentes" },
        { name: "Comienza ahora", href: "#cta" }, // Apuntando a la sección CTA/Contacto
    ];

    // Estilo para el icono del botón (ajustado a w-4 h-4)
    const iconStyleSmall = { fontSize: '16px' };

    return (
        // CAMBIO: 'fixed' en lugar de 'sticky' para que flote siempre visible
        <header className="fixed top-0 left-0 w-full bg-white/90 border-b border-sky-100 backdrop-blur z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* 1. Logo y Enlace a Inicio */}
                <a href="#inicio" className="flex items-center gap-3">
                    <img
                        src="/logo.svg"
                        alt="ANMI Logo"
                        className="h-10 w-auto" // Ajustado para que se vea bien en la barra fija
                    />
                </a>

                {/* 2. Navegación del Menú (Añadida y ajustada) */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            // Estilo de los botones de navegación con hover y transición
                            className="text-sm font-medium text-slate-600 hover:text-[#DB162F] transition-colors"
                            // Opcional: Agregar scroll suave (si no se usa una librería de scroll spy)
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector(link.href)?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    {/* Línea roja de estilo como en la imagen (simulación de 'activo' en 'Conócenos' para el ejemplo) */}
                    {/* Este underline rojo lo maneja normalmente el componente padre o estado, pero para replicar tu imagen lo omito aquí ya que es solo un estado visual. */}
                </nav>

                {/* 3. Botón "Usar ANMI" */}
                {showButton && onButtonClick && (
                    <Button
                        onClick={onButtonClick}
                        className="px-4 py-2 bg-[#DB162F] hover:bg-yellow-400 text-white"
                    >
            <span className="material-symbols-outlined mr-2" style={iconStyleSmall}>
              arrow_forward
            </span>
                        <span className="hidden sm:inline">Usar ANMI</span>
                        <span className="sm:hidden">Usar</span>
                    </Button>
                )}
            </div>
        </header>
    );
}