import { Card } from "../ui/card";

interface SectionConocenosProps {
    id: string;
}


export function SectionConocenos({ id }: SectionConocenosProps) {
    return (
        <section id={id} className="bg-gradient-to-b from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-20 left-10 w-24 h-24 bg-yellow-200 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-40 blur-2xl"></div>
            <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-200 rounded-full opacity-40 blur-2xl"></div>

            {/* Formas decorativas simples */}
            <div className="absolute top-10 right-10 text-5xl opacity-20">⭐</div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Encabezado principal con badge */}
                <div className="text-center mb-12 max-w-4xl mx-auto">


                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        Un Proyecto con
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600"> Propósito Social</span>
                    </h2>

                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        ANMI nace como una iniciativa académica de la <span className="font-semibold text-slate-900">Universidad Nacional Mayor de San Marcos</span> en el marco del curso de Ética y Derecho Informático. Utilizamos la tecnología de manera responsable para combatir la anemia infantil.
                    </p>

                    <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-2 text-sm text-emerald-800">
                        <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                            verified_user
                        </span>
                        <span>Comprometidos con la ética, privacidad y Ley 29733</span>
                    </div>
                </div>

                {/* Título de sección con estilo moderno */}
                <div className="text-center mb-10">
                    <p className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">Nuestro Enfoque</p>
                    <h3 className="text-3xl font-bold text-slate-900">
                        Pilares de Desarrollo
                    </h3>
                </div>

                {/* Grid de tarjetas con diseño moderno */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Pilar 1: Curación de Contenido */}
                    <Card className="group relative p-8 bg-gradient-to-br from-sky-100 to-sky-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-sky-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-sky-600" style={{fontSize: '36px'}}>
                                    fact_check
                                </span>
                            </div>

                            <h4 className="font-bold text-slate-900 mb-3 text-xl">
                                Curación de Contenido
                            </h4>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Investigación y estructuración de un <span className="font-semibold text-sky-700">motor de conocimiento</span> basado únicamente en fuentes oficiales del MINSA y OMS/OPS.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">📚</div>
                    </Card>

                    {/* Pilar 2: Ética y Derecho */}
                    <Card className="group relative p-8 bg-gradient-to-br from-rose-100 to-rose-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-rose-600" style={{fontSize: '36px'}}>
                                    policy
                                </span>
                            </div>

                            <h4 className="font-bold text-slate-900 mb-3 text-xl">
                                Privacidad y Ley 29733
                            </h4>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Diseño de arquitectura con énfasis en <span className="font-semibold text-rose-700">minimización, anonimización</span> y control total del usuario sobre sus datos personales.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">🔒</div>
                    </Card>

                    {/* Pilar 3: Desarrollo Tecnológico */}
                    <Card className="group relative p-8 bg-gradient-to-br from-emerald-100 to-emerald-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden hover:-translate-y-2">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-300 rounded-full opacity-20 -mr-16 -mt-16"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-emerald-600" style={{fontSize: '36px'}}>
                                    code_blocks
                                </span>
                            </div>

                            <h4 className="font-bold text-slate-900 mb-3 text-xl">
                                Prototipo Responsable
                            </h4>

                            <p className="text-slate-700 text-base leading-relaxed">
                                Implementación con <span className="font-semibold text-emerald-700">mecanismos de salida de emergencia</span> que redirigen a ayuda profesional cuando es necesario.
                            </p>
                        </div>

                        <div className="absolute bottom-4 right-4 text-4xl opacity-10">💻</div>
                    </Card>
                </div>
            </div>
        </section>
    );
}