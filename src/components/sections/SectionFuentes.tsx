import { Card } from "../ui/card";

interface SectionFuentesProps {
    id: string;
}

export function SectionFuentes({ id }: SectionFuentesProps) {
    return (
        <section id={id} className="bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-36 h-36 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>

            {/* Decoraciones */}
            <div className="absolute top-20 left-20 text-5xl opacity-15">📚</div>
            <div className="absolute bottom-20 right-20 text-5xl opacity-15">🎓</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border-2 border-indigo-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-semibold text-slate-700">Fuentes Oficiales</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Información
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> validada y confiable</span>
                    </h2>

                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        ANMI utiliza contenido pre-cargado y revisado a partir de guías oficiales de salud infantil
                    </p>
                </div>

                {/* Grid de tarjetas de fuentes */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Tarjeta 1: MINSA */}
                    <Card className="group relative p-8 bg-gradient-to-br from-sky-100 to-blue-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform p-3">
                                <span className="text-4xl">🏥</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-2xl">
                                MINSA
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Basado en <span className="font-semibold text-blue-700">normas y guías de salud materno-infantil</span> del Ministerio de Salud del Perú.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-3xl opacity-10">🇵🇪</div>
                    </Card>

                    {/* Tarjeta 2: OMS / OPS */}
                    <Card className="group relative p-8 bg-gradient-to-br from-indigo-100 to-indigo-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform p-3">
                                <span className="text-4xl">🌍</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-2xl">
                                OMS / OPS
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Referencias de <span className="font-semibold text-indigo-700">recomendaciones internacionales</span> basadas en evidencia científica.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-3xl opacity-10">🌐</div>
                    </Card>

                    {/* Tarjeta 3: Equipo académico */}
                    <Card className="group relative p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 mx-auto mb-6 bg-white rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform p-3">
                                <span className="text-4xl">🎓</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-2xl">
                                Equipo Académico
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Contenido preparado y revisado por el <span className="font-semibold text-purple-700">equipo UNMSM</span>, con enfoque ético y responsable.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-3xl opacity-10">📖</div>
                    </Card>
                </div>

                {/* Sección de garantía de calidad */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-4">
                                <span className="text-sm font-bold text-blue-700">✓ Calidad Garantizada</span>
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                Respaldo científico en cada respuesta
                            </h3>

                            <p className="text-slate-700 leading-relaxed mb-6">
                                Cada recomendación que ANMI te brinda está fundamentada en documentos oficiales y guías clínicas reconocidas internacionalmente. No inventamos información ni damos consejos sin respaldo científico.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                                    <p className="text-slate-700 text-sm">
                                        <span className="font-semibold">Contenido pre-validado</span> por el equipo académico
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-indigo-600 text-xl flex-shrink-0">✓</span>
                                    <p className="text-slate-700 text-sm">
                                        <span className="font-semibold">Actualizado constantemente</span> según nuevas publicaciones
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-purple-600 text-xl flex-shrink-0">✓</span>
                                    <p className="text-slate-700 text-sm">
                                        <span className="font-semibold">Sin sesgos comerciales</span> ni recomendaciones de marcas
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-3xl p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="text-6xl mb-4">📋</div>
                                    <h4 className="font-bold text-slate-900 text-xl mb-2">
                                        Fuentes Documentadas
                                    </h4>
                                    <p className="text-slate-600 text-sm mb-6">
                                        Toda la información de ANMI proviene de documentos oficiales verificables
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2">
                                        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
                                            Guías MINSA
                                        </span>
                                        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
                                            OMS/OPS
                                        </span>
                                        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700 shadow-sm">
                                            Evidencia científica
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}