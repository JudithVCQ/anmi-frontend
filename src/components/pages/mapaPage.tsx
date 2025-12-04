// src/components/pages/MapaPage.tsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PeruMap } from './recetasPage/PeruMap';

export default function MapaPage() {
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
        <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF0D8] to-[#FFE8CC] flex flex-col py-8 px-4 relative overflow-hidden">
            {/* Elementos decorativos flotantes */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFB4B4] rounded-full opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute top-1/3 right-10 w-32 h-32 bg-[#B4E4FF] rounded-full opacity-25 blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-32 left-20 w-24 h-24 bg-[#FFE5B4] rounded-full opacity-30 blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-32 w-28 h-28 bg-[#D4B5FF] rounded-full opacity-25 blur-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>

            {/* Formas decorativas */}
            <div className="absolute top-24 right-16 text-5xl opacity-15 animate-bounce" style={{animationDuration: '3s'}}>🌟</div>
            <div className="absolute top-1/2 left-12 text-4xl opacity-20 animate-bounce" style={{animationDuration: '4s'}}>🍽️</div>
            <div className="absolute bottom-40 right-20 text-5xl opacity-15 animate-pulse">✨</div>
            <div className="absolute top-40 left-1/4 text-4xl opacity-20 animate-bounce" style={{animationDuration: '3.5s'}}>🥘</div>

            {/* Header con botón de volver */}
            <div className="max-w-6xl mx-auto w-full mb-8 relative z-10">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 text-[#6B4E71] hover:text-[#FF6B9D] transition-all duration-300 font-bold text-base bg-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#6B4E71]/10"
                >
                    <span className="material-symbols-rounded text-2xl">home</span>
                    Volver al inicio
                </button>
            </div>

            {/* Contenedor principal */}
            <main className="flex-grow flex items-center justify-center px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl w-full">
                    {/* Card principal */}
                    <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-[#FFD4A3]/30 relative">
                        {/* Decoración superior */}
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B9D] to-[#FF8FAB] rounded-2xl rotate-12 shadow-lg"></div>
                            <div className="w-12 h-12 bg-gradient-to-br from-[#FFB347] to-[#FFCC70] rounded-full shadow-lg"></div>
                            <div className="w-12 h-12 bg-gradient-to-br from-[#95E1D3] to-[#A8E6CF] rounded-2xl -rotate-12 shadow-lg"></div>
                        </div>

                        {/* Título */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFE5B4] via-[#FFD4A3] to-[#FFE5B4] px-8 py-3 rounded-full mb-6 shadow-md border-2 border-white">
                                <span className="text-3xl">♡</span>
                                <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#8B6F47] font-black">
                                    Mapa Interactivo
                                </p>
                            </div>

                            <h1 className="text-4xl sm:text-6xl font-black text-[#4A4A68] mb-6 tracking-tight leading-tight">
                                Descubre los <span className="text-[#FF6B9D]">sabores</span> del <span className="text-[#FFB347]">Perú</span>
                            </h1>

                            <p className="text-lg sm:text-xl text-[#6B4E71] font-semibold max-w-2xl mx-auto leading-relaxed">
                                Selecciona una región en el mapa para explorar recetas ricas en hierro y combatir la anemia
                            </p>
                        </div>

                        {/* Mapa */}
                        <div className="flex justify-center mb-10 relative">
                            {/* Decoración alrededor del mapa */}
                            <div className="absolute -left-8 top-1/4 text-4xl opacity-30 animate-bounce" style={{animationDuration: '2.5s'}}>
                                🏖️
                            </div>
                            <div className="absolute -right-8 top-1/3 text-4xl opacity-30 animate-bounce" style={{animationDuration: '3s'}}>
                                🌴
                            </div>
                            <div className="absolute left-1/4 -top-4 text-3xl opacity-30 animate-pulse">
                                🏔️
                            </div>

                            <div className="relative p-8 bg-gradient-to-br from-[#FFF4D6]/50 to-[#FFE8B8]/50 rounded-[35px] border-4 border-white shadow-xl flex items-center justify-center"> <div className="text-center">
                                <p className="text-xl mb-4">ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</p>
                                <PeruMap /></div>
                            </div>
                        </div>

                        {/* Instrucciones */}
                        <div className="text-center">
                            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFB4E5]/20 via-[#FFC4E8]/20 to-[#FFB4E5]/20 px-8 py-4 rounded-full border-2 border-[#FF6B9D]/20 shadow-md">
                                <span className="text-3xl">👆</span>
                                <p className="text-base sm:text-lg text-[#6B4E71] font-bold">
                                    Haz clic en la <span className="text-[#FFB347]">Costa</span>, <span className="text-[#8B6F47]">Sierra</span> o <span className="text-[#95E1D3]">Selva</span> para ver las recetas
                                </p>
                                <span className="text-3xl">✨</span>
                            </div>
                        </div>

                        {/* Tarjetas de las regiones */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                            {/* Costa */}
                            <div className="bg-gradient-to-br from-[#FFF4D6] to-[#FFE8B8] p-6 rounded-[30px] border-4 border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer">
                                <div className="absolute -top-3 -right-3 bg-[#FFB347] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-xl group-hover:scale-110 transition-transform">
                                    🏖️
                                </div>
                                <h3 className="text-2xl font-black text-[#FFB347] mb-2">Costa</h3>
                                <p className="text-sm text-[#5D4E37] font-semibold">Explora los sabores del litoral peruano</p>
                            </div>

                            {/* Sierra */}
                            <div className="bg-gradient-to-br from-[#FFE5D9] to-[#FFD4B8] p-6 rounded-[30px] border-4 border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer">
                                <div className="absolute -top-3 -right-3 bg-[#8B6F47] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-xl group-hover:scale-110 transition-transform">
                                    🏔️
                                </div>
                                <h3 className="text-2xl font-black text-[#8B6F47] mb-2">Sierra</h3>
                                <p className="text-sm text-[#5D4E37] font-semibold">Descubre los platos andinos tradicionales</p>
                            </div>

                            {/* Selva */}
                            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-6 rounded-[30px] border-4 border-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer">
                                <div className="absolute -top-3 -right-3 bg-[#2E7D32] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg text-xl group-hover:scale-110 transition-transform">
                                    🌴
                                </div>
                                <h3 className="text-2xl font-black text-[#2E7D32] mb-2">Selva</h3>
                                <p className="text-sm text-[#1B5E20] font-semibold">Conoce la riqueza amazónica del Perú</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Decoración inferior */}
            <div className="mt-8 flex gap-4 items-center justify-center opacity-40 relative z-10">
                <div className="w-8 h-8 bg-[#FFB4E5] rounded-full animate-pulse"></div>
                <div className="w-12 h-12 bg-[#B4E4FF] rounded-2xl rotate-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-8 h-8 bg-[#FFE5B4] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="w-10 h-10 bg-[#D4B5FF] rounded-2xl -rotate-12 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
        </div>
    );
}