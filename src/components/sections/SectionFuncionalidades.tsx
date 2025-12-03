// src/components/sections/SectionFuncionalidades.tsx

import {
    CheckCircleIcon,
    XCircleIcon,
    AlertCircleIcon,
} from "lucide-react";

export function SectionFuncionalidades() {
    return (
        // ******************************************************
        // IMPORTANTE: Se añade el ID de anclaje para la navegación
        // ******************************************************
        <section id="funcionalidades" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                    ¿Qué hace ANMI?
                </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Sí puede */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
                            <CheckCircleIcon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            ANMI SÍ puede:
                        </h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            "Darte información clara sobre alimentos ricos en hierro para tu bebé.",
                            "Responder preguntas comunes sobre lactancia y alimentación complementaria.",
                            "Explicar de manera sencilla cómo la buena nutrición ayuda al crecimiento.",
                            "Orientarte con hábitos saludables para ayudar a prevenir la anemia.",
                            "Usar solo la información que ingreses durante la conversación.",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100"
                            >
                                <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                <p className="text-slate-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* No puede */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center">
                            <XCircleIcon className="w-6 h-6 text-[#DB162F]" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            ANMI NO puede:
                        </h3>
                    </div>
                    <div className="space-y-4">
                        {[
                            "Reemplazar la consulta con un pediatra o nutricionista.",
                            "Dar diagnósticos o interpretar síntomas.",
                            "Indicar medicamentos, suplementos o tratamientos.",
                            "Crear dietas personalizadas o dar cantidades exactas de alimentos.",
                            "Guardar tu información una vez que cierres la conversación.",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex gap-3 p-4 bg-rose-50 rounded-xl border border-rose-100"
                            >
                                <XCircleIcon className="w-5 h-5 text-[#DB162F] flex-shrink-0 mt-0.5" />
                                <p className="text-slate-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bloque de Importante */}
            <div className="mt-12 p-6 bg-rose-50 border-l-4 border-[#DB162F] rounded-2xl flex gap-4">
                <AlertCircleIcon className="w-6 h-6 text-[#DB162F] flex-shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-[#DB162F] mb-2">Importante</h4>
                    <p className="text-rose-900 text-sm">
                        Si sospechas que tu hijo tiene anemia o presenta síntomas
                        preocupantes, consulta inmediatamente con un pediatra o
                        nutricionista. ANMI es una herramienta educativa complementaria y
                        no reemplaza la atención profesional.
                    </p>
                </div>
            </div>
        </section>
    );
}