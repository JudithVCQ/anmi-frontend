// src/components/pages/MapaPage.tsx

import { Header } from '../sections/header'; // Asegúrate de que la ruta sea correcta
import { PeruMap } from './recetasPage/PeruMap';

export default function MapaPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#F0F9FF]">
            {/* Header sin botón de 'Empezar' porque ya estamos dentro */}
            <Header showButton={false} />

            <main className="flex-grow py-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Títulos e Instrucciones */}
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                        Descubre los sabores del Perú
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                        Selecciona una región en el mapa para explorar recetas ricas en hierro y combatir la anemia.
                    </p>

                    {/* Aquí renderizamos el mapa ensamblado */}
                    <div className="flex justify-center">
                        <PeruMap />
                    </div>

                    <p className="mt-8 text-sm text-slate-400">
                        * Haz clic en la Costa, Sierra o Selva para ver las recetas.
                    </p>
                </div>
            </main>
        </div>
    );
}