import { Card } from "../ui/card";

interface SectionImportanciaProps {
    id: string;
}

export function SectionImportancia({ id }: SectionImportanciaProps) {
    return (
        <section id={id} className="bg-gradient-to-b from-amber-50 via-orange-50 to-amber-50 py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-10 right-10 w-40 h-40 bg-orange-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-36 h-36 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>

            {/* Decoraciones */}
            <div className="absolute top-20 left-20 text-4xl opacity-15">💡</div>
            <div className="absolute bottom-20 right-20 text-4xl opacity-15">✨</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border-2 border-orange-200 rounded-full px-5 py-2 mb-6 shadow-sm">
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        <span className="text-sm font-semibold text-slate-700">Salud Infantil</span>
                    </div>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        ¿Por qué prevenir la
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600"> anemia infantil</span>?
                    </h2>

                    <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
                        La anemia afecta el desarrollo cognitivo, físico e inmunológico de los niños. Cuidar la alimentación desde el inicio marca una gran diferencia en su futuro.
                    </p>
                </div>

                {/* Grid de tarjetas */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Tarjeta 1: Desarrollo cognitivo */}
                    <Card className="group relative p-8 bg-gradient-to-br from-blue-100 to-blue-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-4xl">🧠</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-xl">
                                Desarrollo Cognitivo
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                La falta de hierro puede afectar la <span className="font-semibold text-blue-700">memoria, atención y aprendizaje</span> en etapas clave del desarrollo cerebral.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">📚</div>
                    </Card>

                    {/* Tarjeta 2: Crecimiento físico */}
                    <Card className="group relative p-8 bg-gradient-to-br from-green-100 to-green-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-4xl">💪</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-xl">
                                Crecimiento Físico
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                El hierro es clave para que tu bebé tenga <span className="font-semibold text-green-700">energía, se mueva, juegue</span> y crezca de forma saludable.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">🌱</div>
                    </Card>

                    {/* Tarjeta 3: Sistema inmunológico */}
                    <Card className="group relative p-8 bg-gradient-to-br from-purple-100 to-purple-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="text-4xl">🛡️</span>
                            </div>

                            <h3 className="font-bold text-slate-900 mb-3 text-xl">
                                Sistema Inmunológico
                            </h3>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Una buena nutrición ayuda a que el <span className="font-semibold text-purple-700">sistema de defensas</span> de tu bebé sea más fuerte frente a infecciones.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">⚡</div>
                    </Card>
                </div>

                {/* Sección adicional: Dato destacado */}
                <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400"></div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-2 mb-4">
                                <span className="text-sm font-bold text-orange-700">💡 Dato Importante</span>
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-4">
                                La prevención es la clave
                            </h3>

                            <p className="text-slate-700 leading-relaxed mb-6">
                                La anemia infantil es prevenible con una alimentación adecuada rica en hierro. Los primeros 1,000 días de vida son fundamentales para establecer hábitos saludables que impactan toda la vida.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-2">
                                    <span>✓</span> Alimentación complementaria oportuna
                                </span>
                                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium flex items-center gap-2">
                                    <span>✓</span> Alimentos ricos en hierro
                                </span>
                                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium flex items-center gap-2">
                                    <span>✓</span> Controles médicos regulares
                                </span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 rounded-3xl p-8 text-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

                                <div className="relative z-10">
                                    <div className="text-7xl mb-4">👶</div>
                                    <div className="text-5xl font-black text-orange-600 mb-2">40%</div>
                                    <p className="text-slate-700 font-medium text-sm">
                                        de niños menores de 3 años en Perú tienen anemia
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-orange-200">
                                        <p className="text-xs text-slate-600">
                                            Fuente: MINSA 2024
                                        </p>
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