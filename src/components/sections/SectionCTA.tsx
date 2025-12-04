import { useNavigate } from 'react-router-dom';

interface SectionCTAProps {
    onStart: () => void;
    id: string;
}

export function SectionCTA({ id, onStart }: SectionCTAProps) {    const navigate = useNavigate(); // ✅ Usar hook de navegación

    const handleRecetas = () => {
        // Navegar a /mapa - ajustar según tu implementación
        navigate('/mapa'); // ✅ Navegar sin recargar
    };

    return (
        <section id={id} className="bg-gradient-to-br from-[#DB162F] via-[#C01129] to-[#A00F24] py-20 sm:py-28 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            {/* Patrón de puntos */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            {/* Formas decorativas */}
            <div className="absolute top-10 left-10 text-6xl opacity-10">🍎</div>
            <div className="absolute top-20 right-20 text-5xl opacity-10">🥗</div>
            <div className="absolute bottom-20 left-20 text-5xl opacity-10">👶</div>
            <div className="absolute bottom-10 right-10 text-6xl opacity-10">💪</div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Badge superior */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-6 py-2 shadow-lg">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <span className="text-sm font-bold text-white">Comienza tu viaje educativo</span>
                    </div>
                </div>

                {/* Contenido central */}
                <div className="text-center mb-12">
                    {/* TÍTULO */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Aprende con
                        <span className="block mt-2 text-5xl sm:text-6xl lg:text-7xl">
                            ANMI
                        </span>
                    </h2>

                    {/* DESCRIPCIÓN */}
                    <p className="text-lg sm:text-xl text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed">
                        Descubre cómo alimentar a tu bebé paso a paso con información <span className="font-bold">oficial y segura</span> para prevenir la anemia.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                            ✓ Información del MINSA
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                            ✓ Guías validadas
                        </span>
                        <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/30">
                            ✓ 100% gratuito
                        </span>
                    </div>
                </div>

                {/* BOTONES */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    {/* BOTÓN 1: APRENDER AHORA */}
                    <button
                        onClick={onStart}
                        className="group relative bg-white hover:bg-slate-50 text-[#DB162F] px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-white/20 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative flex items-center justify-center gap-2">
                            Aprender ahora
                            <span className="material-symbols-outlined text-2xl">
                                menu_book
                            </span>
                        </span>
                    </button>

                    {/* BOTÓN 2: VER RECETAS */}
                    <button
                        onClick={handleRecetas}
                        className="group border-3 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#DB162F] px-10 py-5 text-lg font-bold rounded-2xl shadow-xl w-full sm:w-auto transition-all duration-300 hover:scale-105"
                    >
                        <span className="flex items-center justify-center gap-2">
                            Ver recetas
                            <span className="material-symbols-outlined text-2xl">
                                nutrition
                            </span>
                        </span>
                    </button>
                </div>

                {/* Información adicional */}
                <div className="text-center">
                    <p className="text-white/70 text-sm">
                        🔒 No guardamos tu información personal • 💬 Sin necesidad de registro
                    </p>
                </div>

                {/* Estadística destacada */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                        <div className="text-4xl font-black text-white mb-2">100%</div>
                        <p className="text-white/80 text-sm font-medium">Información oficial</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                        <div className="text-4xl font-black text-white mb-2">24/7</div>
                        <p className="text-white/80 text-sm font-medium">Disponible siempre</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center">
                        <div className="text-4xl font-black text-white mb-2">0%</div>
                        <p className="text-white/80 text-sm font-medium">Costo para ti</p>
                    </div>
                </div>
            </div>
        </section>
    );
}