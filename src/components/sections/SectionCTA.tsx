// src/components/sections/SectionCTA.tsx

import { Button } from "../ui/button";

interface SectionCTAProps {
    onStart: () => void;
    // 👈 AÑADIDO: Ahora el componente acepta la prop 'id'
    id: string;
}

// MODIFICADO: Ahora el componente recibe la prop 'id'
export function SectionCTA({ id, onStart }: SectionCTAProps) {
    return (
        // ******************************************************
        // MODIFICADO: Usamos la prop 'id' (será 'cta') en lugar del string fijo "comenzar"
        // ******************************************************
        <section id={id} className="bg-[#DB162F] py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                    Comienza hoy mismo
                </h2>
                <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                    Usa ANMI como apoyo para cuidar la alimentación de tu bebé y
                    acompañarlo en sus primeros pasos con más información y
                    tranquilidad.
                </p>
                <Button
                    onClick={onStart}
                    className="bg-white hover:bg-slate-100 text-[#DB162F] px-10 py-4 text-lg font-bold shadow-md"
                >
                    Usar ANMI
                    {/* Reemplazando ArrowRightIcon con Google Icon */}
                    <span className="material-symbols-outlined text-xl ml-2">
                        arrow_forward
                    </span>
                </Button>
            </div>
        </section>
    );
}