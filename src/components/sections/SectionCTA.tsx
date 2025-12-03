// src/components/sections/SectionCTA.tsx

import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

interface SectionCTAProps {
    onStart: () => void;
    id: string;
}

export function SectionCTA({ id, onStart }: SectionCTAProps) {
    const navigate = useNavigate();

    return (
        <section id={id} className="bg-[#DB162F] py-16 sm:py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                {/* TÍTULO */}
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                    <span className="material-symbols-outlined text-5xl">
                        school
                    </span>
                    Aprende con ANMI
                </h2>

                {/* DESCRIPCIÓN */}
                <p className="text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium">
                    Descubre cómo alimentar a tu bebé paso a paso. <br className="hidden sm:block"/>
                    Información oficial y segura para prevenir la anemia.
                </p>

                {/* BOTONES */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                    {/* BOTÓN 1: IR A LA SECCIÓN EDUCATIVA */}
                    <Button
                        onClick={onStart}
                        className="bg-white hover:bg-slate-100 text-[#DB162F] px-10 py-6 text-lg font-bold shadow-lg w-full sm:w-auto transition-transform hover:scale-105"
                    >
                        Aprender ahora
                        <span className="material-symbols-outlined text-xl ml-2">
                            menu_book
                        </span>
                    </Button>

                    {/* BOTÓN 2: VER RECETAS (Ruta /mapa) */}
                    <Button
                        onClick={() => navigate('/mapa')}
                        variant="outline"
                        className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white px-10 py-6 text-lg font-bold shadow-md w-full sm:w-auto"
                    >
                        Ver recetas
                        <span className="material-symbols-outlined text-xl ml-2">
                            nutrition
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    );
}