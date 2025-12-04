import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SudaditoPescadoCosta() {
    const navigate = useNavigate();

    // Cargar Google Material Symbols
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF0D8] to-[#FFE8CC] flex flex-col items-center py-12 px-4 relative overflow-hidden">
            {/* Elementos decorativos flotantes */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-[#B4E4FF] rounded-full opacity-40 blur-xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFD4A3] rounded-full opacity-30 blur-xl"></div>
            <div className="absolute bottom-40 left-32 w-20 h-20 bg-[#A8E6CF] rounded-full opacity-40 blur-xl"></div>
            <div className="absolute bottom-20 right-16 w-32 h-32 bg-[#FFB4E5] rounded-full opacity-30 blur-2xl"></div>

            {/* Formas decorativas */}
            <div className="absolute top-32 right-10 text-6xl opacity-20 animate-bounce" style={{animationDuration: '3s'}}>🐟</div>
            <div className="absolute bottom-32 left-20 text-5xl opacity-25 animate-bounce" style={{animationDuration: '4s'}}>🌊</div>
            <div className="absolute top-1/2 left-10 text-4xl opacity-20 animate-pulse">✨</div>

            {/* Botón Volver */}
            <button
                onClick={() => navigate("/mapa")}
                className="flex items-center gap-2 mb-10 text-[#6B4E71] hover:text-[#DB162F] transition-all duration-300 font-bold text-base bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#6B4E71]/10 relative z-10"
            >
                <span className="material-symbols-rounded text-2xl">arrow_back</span>
                Volver al mapa
            </button>

            {/* Contenedor principal */}
            <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-14 max-w-7xl w-full relative z-10 border border-[#FFD4A3]/30">
                {/* Decoración superior */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4FC3F7] to-[#29B6F6] rounded-2xl rotate-12 shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#FFB347] to-[#FFCC70] rounded-full shadow-lg"></div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#81C784] to-[#66BB6A] rounded-2xl -rotate-12 shadow-lg"></div>
                </div>

                {/* Título */}
                <header className="mb-14 text-center relative">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B4E4FF] via-[#A8D5FF] to-[#B4E4FF] px-8 py-3 rounded-full mb-6 shadow-md border-2 border-white">
                        <span className="text-2xl">🌊</span>
                        <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#0277BD] font-black">
                            Receta de la Costa
                        </p>
                        <span className="text-2xl">🐟</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-[#4A4A68] mb-4 tracking-tight leading-tight">
                        Sudadito de <span className="text-[#0288D1]">Pescado</span>
                    </h1>
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#A8E6CF] to-[#95E1D3] px-6 py-3 rounded-full shadow-lg">
                        <span className="text-2xl">👶</span>
                        <p className="text-base md:text-lg font-bold text-[#00695C]">
                            Para bebés de 9 a 11 meses
                        </p>
                    </div>
                </header>

                {/* Grid principal */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
                    {/* FOTO */}
                    <div className="lg:col-span-1 flex justify-center items-start relative">
                        <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#B4E4FF] rounded-3xl rotate-12 opacity-50"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#A8E6CF] rounded-full opacity-60"></div>
                        <div className="relative">
                            <img
                                src="/recetas/sudaditoDePescado.png"
                                alt="Sudadito de pescado"
                                className="relative rounded-[35px] shadow-2xl w-full max-w-sm object-cover border-8 border-white hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#0288D1] to-[#03A9F4] text-white px-4 py-2 rounded-2xl shadow-lg font-black text-sm rotate-6">
                                ¡Delicioso! 😋
                            </div>
                        </div>
                    </div>

                    {/* INGREDIENTES */}
                    <section className="lg:col-span-1 bg-gradient-to-br from-[#FFF4D6] to-[#FFE8B8] p-8 rounded-[35px] shadow-xl hover:shadow-2xl transition-all duration-300 relative border-4 border-white">
                        <div className="absolute -top-4 -right-4 bg-[#0288D1] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-2xl">
                            🐟
                        </div>
                        <h2 className="text-3xl font-black text-[#FF6B35] mb-8 flex items-center gap-3">
                            <div className="bg-white rounded-2xl p-3 shadow-md">
                                <span className="material-symbols-rounded text-3xl text-[#FF6B35]">
                                    restaurant
                                </span>
                            </div>
                            Ingredientes
                        </h2>
                        <ul className="space-y-4 text-[#5D4E37]">
                            {[
                                { item: "1/8 de unidad pequeña de cebolla", emoji: "🧅" },
                                { item: "¼ de unidad pequeña de tomate", emoji: "🍅" },
                                { item: "½ filete de pescado", emoji: "🐟" },
                                { item: "½ cucharadita de aceite vegetal", emoji: "🫒" },
                                { item: "1/8 de taza de agua", emoji: "💧" },
                                { item: "Una pizca de sal yodada", emoji: "🧂" },
                                { item: "2 cucharadas de arroz graneado", emoji: "🍚" }
                            ].map((data, i) => (
                                <li key={i} className="flex items-start gap-4 text-base font-semibold hover:translate-x-2 transition-transform">
                                    <span className="text-2xl flex-shrink-0">{data.emoji}</span>
                                    <span className="pt-1">{data.item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* PREPARACIÓN */}
                    <section className="lg:col-span-1 bg-gradient-to-br from-[#E1F5FE] to-[#B3E5FC] p-8 rounded-[35px] shadow-xl hover:shadow-2xl transition-all duration-300 relative border-4 border-white">
                        <div className="absolute -top-4 -right-4 bg-[#00ACC1] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-2xl">
                            👨‍🍳
                        </div>
                        <h2 className="text-3xl font-black text-[#0288D1] mb-8 flex items-center gap-3">
                            <div className="bg-white rounded-2xl p-3 shadow-md">
                                <span className="material-symbols-rounded text-3xl text-[#0288D1]">
                                    skillet
                                </span>
                            </div>
                            Preparación
                        </h2>
                        <ol className="space-y-5 text-[#01579B]">
                            {[
                                "Freír en aceite la cebolla picada y el tomate pelado y picado en cuadraditos.",
                                "Agregar el pescado, el agua y una pizca de sal yodada.",
                                "Retirar el pescado de la preparación, desmenuzar y quitar las espinas.",
                                "Mezclar el pescado desmenuzado con el aderezo.",
                                "Servir el sudado acompañado con el arroz graneado."
                            ].map((step, i) => (
                                <li key={i} className="flex gap-4 text-base font-semibold hover:translate-x-2 transition-transform">
                                    <span className="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-[#0288D1] to-[#03A9F4] text-white rounded-2xl flex items-center justify-center text-base font-black shadow-md">
                                        {i + 1}
                                    </span>
                                    <span className="pt-1">{step}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

                {/* Frase final */}
                <div className="mb-14 text-center relative">
                    <div className="bg-gradient-to-r from-[#E8F5E9] via-[#C8E6C9] to-[#E8F5E9] rounded-[35px] p-10 border-4 border-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-4 left-4 text-5xl opacity-20">🐟</div>
                        <div className="absolute bottom-4 right-4 text-5xl opacity-20">💪</div>
                        <div className="relative z-10">
                            <div className="text-5xl mb-4">💙✨</div>
                            <p className="text-2xl md:text-3xl text-[#2E7D32] font-black leading-relaxed max-w-3xl mx-auto">
                                "El pescado es una fuente rica en proteínas, muy importante para el crecimiento"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Aporte nutricional */}
                <section className="mb-14 bg-gradient-to-br from-[#0277BD] via-[#0288D1] to-[#0277BD] rounded-[40px] px-8 py-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>

                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-flex items-center gap-3 mb-3">
                            <span className="text-4xl">📊</span>
                            <p className="uppercase text-sm tracking-[0.3em] font-black text-[#B3E5FC]">
                                Aporte nutricional
                            </p>
                            <span className="text-4xl">💯</span>
                        </div>
                        <p className="text-xl font-bold text-white">
                            por ración
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 relative z-10">
                        {[
                            { label: "Energía", value: "144 kcal", color: "from-[#FFB347] to-[#FFCC70]", icon: "⚡" },
                            { label: "Proteína", value: "11,4 g", color: "from-[#FF6B9D] to-[#FF8FAB]", icon: "💪" },
                            { label: "Hierro", value: "0,7 mg", color: "from-[#FF6B6B] to-[#FF8787]", icon: "❤️" },
                            { label: "Retinol", value: "5,0 µg", color: "from-[#95E1D3] to-[#A8E6CF]", icon: "👁️" },
                            { label: "Zinc", value: "0,3 mg", color: "from-[#C9A9E9] to-[#D4BBFF]", icon: "🛡️" },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="relative group"
                            >
                                <div className={`w-32 h-32 md:w-36 md:h-36 rounded-[30px] bg-gradient-to-br ${item.color} shadow-2xl border-4 border-white flex flex-col items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                                    <span className="text-3xl mb-2">{item.icon}</span>
                                    <span className="text-xs md:text-sm font-black text-white/90 mb-1">
                                        {item.label}
                                    </span>
                                    <span className="text-sm md:text-base font-black text-white">
                                        {item.value}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video de la receta */}
                <section>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-[#0288D1]/10 via-[#FFB347]/10 to-[#95E1D3]/10 px-8 py-4 rounded-full border-2 border-[#0288D1]/20">
                            <span className="text-4xl">🎬</span>
                            <h2 className="text-3xl md:text-4xl font-black text-[#4A4A68]">
                                Mira cómo preparar esta receta
                            </h2>
                            <span className="text-4xl">✨</span>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-3 bg-gradient-to-r from-[#0288D1] via-[#FFB347] to-[#95E1D3] rounded-[40px] blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                        <div className="relative aspect-video w-full rounded-[35px] overflow-hidden shadow-2xl border-8 border-white">
                            <iframe
                                src="https://www.youtube.com/embed/9L9isQMXjdY?si=lZMQIYJ7G428Xn7h"
                                title="Sudadito de pescado - Receta para bebés"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Decoración inferior */}
            <div className="mt-8 flex gap-4 items-center justify-center opacity-40">
                <div className="w-8 h-8 bg-[#B4E4FF] rounded-full"></div>
                <div className="w-12 h-12 bg-[#FFE5B4] rounded-2xl rotate-45"></div>
                <div className="w-8 h-8 bg-[#A8E6CF] rounded-full"></div>
                <div className="w-10 h-10 bg-[#FFB4E5] rounded-2xl -rotate-12"></div>
            </div>
        </div>
    );
}