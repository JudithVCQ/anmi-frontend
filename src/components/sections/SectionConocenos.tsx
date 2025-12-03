// src/components/sections/SectionConocenos.tsx

import { Card } from "../ui/card";

// AÑADIDO: Definición de la interfaz de propiedades para aceptar el 'id'
interface SectionConocenosProps {
    id: string;
}

// Iconos de Google Material Symbols
const iconStyle = {
    fontSize: '36px',
    lineHeight: '1',
};

// MODIFICADO: Ahora el componente recibe la prop 'id'
export function SectionConocenos({ id }: SectionConocenosProps) {
    return (
        // MODIFICADO: Usamos la prop 'id' en lugar del string fijo
        <section id={id} className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 1. Introducción y Misión Ética (Sutil) */}
                <div className="text-center mb-16 max-w-4xl mx-auto">

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Un Proyecto de la UNMSM con Propósito Social.
                    </h2>

                    <p className="text-xl text-slate-700 leading-relaxed">
                        ANMI nace como una iniciativa académica de la Universidad Nacional Mayor de San Marcos (UNMSM) en el marco del curso de Ética y Derecho Informático. El equipo ha desarrollado este prototipo para utilizar la tecnología de manera responsable, con el fin de combatir la anemia infantil, un problema de salud pública.
                    </p>

                    <p className="mt-4 text-md text-slate-600">
                        La herramienta se construye bajo un estricto compromiso con la ética, la privacidad de los datos y la aplicación de la Ley 29733 (Protección de Datos Personales).
                    </p>
                </div>

                {/* 2. Pilares del Equipo / Áreas de Enfoque */}
                <h3 className="text-3xl font-bold text-center text-slate-900 mb-10 border-b pb-4">
                    Nuestros Pilares de Desarrollo
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Pilar 1: Curación de Contenido (Clases de animación de sombra añadidas) */}
                    <Card className="p-8 bg-[#E0F2FE] border-2 border-sky-300 shadow-md hover:shadow-lg transition-shadow rounded-2xl text-center">
                        <div className="mx-auto mb-4 text-sky-800">
                             <span className="material-symbols-outlined" style={iconStyle}>
                                fact_check
                            </span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">
                            Curación de Contenido
                        </h4>
                        <p className="text-slate-700 text-sm">
                            Investigación y estructuración de un <span className="font-semibold">motor de conocimiento</span> basado únicamente en fuentes oficiales: MINSA y OMS/OPS.
                        </p>
                    </Card>

                    {/* Pilar 2: Ética y Derecho Informático (Clases de animación de sombra añadidas) */}
                    <Card className="p-8 bg-[#FEE2E2] border-2 border-rose-300 shadow-md hover:shadow-lg transition-shadow rounded-2xl text-center">
                        <div className="mx-auto mb-4 text-[#DB162F]">
                             <span className="material-symbols-outlined" style={iconStyle}>
                                policy
                            </span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">
                            Privacidad y Ley 29733
                        </h4>
                        <p className="text-slate-700 text-sm">
                            Diseño de la arquitectura de datos con énfasis en minimización, anonimización, consentimiento informado y control total del usuario sobre sus datos.
                        </p>
                    </Card>

                    {/* Pilar 3: Desarrollo Tecnológico (Clases de animación de sombra añadidas) */}
                    <Card className="p-8 bg-[#D1FAE5] border-2 border-emerald-300 shadow-md hover:shadow-lg transition-shadow rounded-2xl text-center">
                        <div className="mx-auto mb-4 text-emerald-800">
                             <span className="material-symbols-outlined" style={iconStyle}>
                                code_blocks
                            </span>
                        </div>
                        <h4 className="font-bold text-slate-900 mb-2 text-xl">
                            Prototipo Responsable
                        </h4>
                        <p className="text-slate-700 text-sm">
                            Implementación de la lógica de conversación y de <span className="font-semibold">mecanismos de "salida de emergencia"</span> que redirigen a ayuda profesional cuando es necesario.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}