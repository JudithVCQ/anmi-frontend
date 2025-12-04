interface SectionFuncionalidadesProps {
    id: string;
}

export function SectionFuncionalidades({ id }: SectionFuncionalidadesProps) {
    return (
        <section id={id} className="bg-gradient-to-b from-white via-slate-50 to-white py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-40 right-10 w-36 h-36 bg-rose-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-20 left-1/3 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

            {/* Decoraciones */}
            <div className="absolute top-20 right-20 text-5xl opacity-10">✓</div>
            <div className="absolute bottom-40 left-20 text-5xl opacity-10">⚠</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border-2 border-blue-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-semibold text-slate-700">Funcionalidades</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ¿Qué hace
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> ANMI</span>?
                    </h2>

                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        Conoce las capacidades y limitaciones de nuestro asistente educativo
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Columna: SÍ puede */}
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 shadow-xl relative overflow-hidden border-2 border-emerald-100">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-300 rounded-full opacity-20 -mr-20 -mt-20"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    ANMI <span className="text-emerald-600">SÍ</span> puede:
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {[
                                    "Darte información clara sobre alimentos ricos en hierro para tu bebé.",
                                    "Responder preguntas comunes sobre lactancia y alimentación complementaria.",
                                    "Explicar de manera sencilla cómo la buena nutrición ayuda al crecimiento.",
                                    "Orientarte con hábitos saludables para ayudar a prevenir la anemia.",
                                    "Usar solo la información que ingreses durante la conversación.",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
                                    >
                                        <span className="text-emerald-600 flex-shrink-0 text-xl font-bold">✓</span>
                                        <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 text-5xl opacity-10">✓</div>
                    </div>

                    {/* Columna: NO puede */}
                    <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 shadow-xl relative overflow-hidden border-2 border-rose-100">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-300 rounded-full opacity-20 -mr-20 -mt-20"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center">
                                    <span className="text-3xl">✗</span>
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    ANMI <span className="text-[#DB162F]">NO</span> puede:
                                </h3>
                            </div>

                            <div className="space-y-3">
                                {[
                                    "Reemplazar la consulta con un pediatra o nutricionista.",
                                    "Dar diagnósticos o interpretar síntomas.",
                                    "Indicar medicamentos, suplementos o tratamientos.",
                                    "Crear dietas personalizadas o dar cantidades exactas de alimentos.",
                                    "Guardar tu información una vez que cierres la conversación.",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-rose-100"
                                    >
                                        <span className="text-[#DB162F] flex-shrink-0 text-xl font-bold">✗</span>
                                        <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute bottom-4 right-4 text-5xl opacity-10">✗</div>
                    </div>
                </div>

                {/* Bloque de Importante - Rediseñado */}
                <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)'
                        }}></div>
                    </div>

                    <div className="relative z-10 flex gap-6 items-start">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                                <span className="text-4xl">⚠️</span>
                            </div>
                        </div>

                        <div className="flex-1">
                            <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                                Importante
                            </h4>
                            <p className="text-white text-base leading-relaxed">
                                Si sospechas que tu hijo tiene anemia o presenta síntomas preocupantes, <span className="font-bold underline">consulta inmediatamente con un pediatra o nutricionista</span>. ANMI es una herramienta educativa complementaria y no reemplaza la atención profesional.
                            </p>

                            <div className="mt-4 pt-4 border-t border-white/30">
                                <p className="text-white/90 text-sm">
                                    💡 <span className="font-semibold">Recuerda:</span> La salud de tu bebé siempre debe ser evaluada por profesionales de la salud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sección adicional: Llamado a la acción */}
                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">📖</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Fuentes Oficiales</h4>
                                <p className="text-slate-600 text-sm">
                                    Toda la información proviene del MINSA, OMS y OPS
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl">🔒</span>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Privacidad Garantizada</h4>
                                <p className="text-slate-600 text-sm">
                                    No guardamos tu información personal ni conversaciones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}