// src/components/sections/SectionFuentes.tsx

import { Card } from "../ui/card";

export function SectionFuentes() {
    return (
        // ******************************************************
        // IMPORTANTE: Se añade el ID de anclaje para la navegación
        // ******************************************************
        <section id="fuentes" className="bg-[#FFFBF0] py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                        Información validada y confiable
                    </h2>
                    <p className="text-xl text-slate-600">
                        ANMI utiliza contenido pre-cargado y revisado a partir de guías
                        oficiales de salud infantil.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Tarjeta 1: MINSA */}
                    <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <img src="/minsa.jpg" alt="Logo MINSA" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">MINSA</h3>
                        <p className="text-slate-600 text-sm">
                            Basado en normas y guías de salud materno-infantil del
                            Ministerio de Salud.
                        </p>
                    </Card>

                    {/* Tarjeta 2: OMS / OPS */}
                    <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <img src="/oms.png" alt="Logo OMS" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">OMS / OPS</h3>
                        <p className="text-slate-600 text-sm">
                            Referencias de recomendaciones internacionales basadas en
                            evidencia.
                        </p>
                    </Card>

                    {/* Tarjeta 3: Equipo académico */}
                    <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                            <img src="/unmsm.png" alt="Logo UNMSM" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="font-bold text-slate-900 mb-3">
                            Equipo académico
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Contenido preparado y revisado por el equipo del proyecto, con
                            enfoque ético y responsable.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}