// src/components/sections/SectionHero.tsx

"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface SectionHeroProps {
    onStart: () => void;
    id: string;
}



export function SectionHero({ id, onStart }: SectionHeroProps) {
    return (
        <section id={id} className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 pt-16">
            {/* Formas decorativas flotantes con colores infantiles - Ocultar en móvil */}
            <div className="hidden md:block absolute top-24 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
            <div className="hidden md:block absolute top-32 right-32 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
            <div className="hidden md:block absolute bottom-20 right-20 w-16 h-16 bg-yellow-300 rounded-full opacity-40"></div>
            <div className="hidden md:block absolute bottom-80 left-1/4 w-20 h-20 bg-pink-200 opacity-40" style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}></div>
            <div className="hidden md:block absolute bottom-60 right-1/3 w-14 h-14 bg-cyan-200 opacity-35" style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>

            {/* Espiral decorativa - Ocultar en móvil */}
            <svg className="absolute top-40 right-16 w-16 h-16 text-orange-300 opacity-50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M50,50 Q50,30 60,30 T70,50 Q70,70 50,70 T30,50 Q30,20 50,20 T80,50" />
            </svg>

            {/* Estrellas decorativas - Reducidas en móvil */}
            <div className="absolute top-28 left-1/3">
                <svg className="w-8 h-8 text-yellow-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
            </div>
            <div className="absolute bottom-1/4 right-1/3">
                <svg className="w-8 h-8 text-yellow-400 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
            </div>

            {/* Triángulos decorativos - Ocultar en móvil */}
            <div className="hidden md:block absolute bottom-1/4 left-16 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-green-300 opacity-40"></div>


            {/* Puntos decorativos multicolor */}
            <div className="absolute top-1/3 left-20 hidden md:flex gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            </div>


            {/* Contenido Principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Columna Izquierda */}
                    <div className="space-y-6 z-10">
                        {/* Badge superior con borde colorido */}
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border-2 border-red-200">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-gray-700">Tu compañero de confianza en nutrición infantil</span>
                        </div>

                        {/* Título principal con subrayado decorativo */}
                        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight">
                            <span className="text-gray-900">Prevenir la </span>
                            <span className="text-red-600 relative inline-block">
                                anemia infantil
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                                    <path d="M2 10C50 5 100 2 150 5C200 8 250 10 298 7" stroke="#DB162F" strokeWidth="3" strokeLinecap="round"/>
                                </svg>
                            </span>
                            <br />
                            <span className="text-gray-900">es posible</span>
                        </h2>

                        {/* Descripción */}
                        <p className="text-xl font-medium text-gray-600 leading-relaxed text">
                            ANMI es un asistente educativo que te ofrece información clara y
                            basada en guías oficiales para ayudarte a prevenir la anemia por
                            deficiencia de hierro en tu bebé, especialmente durante los
                            primeros meses de alimentación complementaria.
                        </p>

                        {/* Características rápidas con iconos coloridos */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-red-100">
                                <span className="material-symbols-outlined text-red-500" style={{fontSize: '20px'}}>
                                    lock
                                </span>
                                <span className="text-sm font-medium text-gray-700">Sin cuentas</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-blue-100">
                                <span className="material-symbols-outlined text-blue-500" style={{fontSize: '20px'}}>
                                    cloud_off
                                </span>
                                <span className="text-sm font-medium text-gray-700">Sin almacenamiento</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-green-100">
                                <span className="material-symbols-outlined text-green-600" style={{fontSize: '20px'}}>
                                    verified
                                </span>
                                <span className="text-sm font-medium text-gray-700">Información respaldada</span>
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                onClick={onStart}
                                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                COMIENZA AHORA
                                <span className="material-symbols-outlined text-xl">
                                    arrow_forward
                                </span>
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200"
                            >
                                Saber más
                            </Button>
                        </div>
                    </div>

                    {/* Columna Derecha - Cards flotantes con colores infantiles */}
                    <div className="hidden md:block relative h-[480px]">

                        {/* Card 1 - Principal (Alimentación segura) - Rojo/Rosa */}
                        <Card className="absolute top-0 right-0 w-64 p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-2xl border-2 border-white">
                            <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                <span className="material-symbols-outlined text-white" style={{fontSize: '32px'}}>
                                    restaurant
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Alimentación segura</h3>
                            <p className="text-sm text-gray-600">Información sobre alimentos ricos en hierro para tu bebé.</p>
                        </Card>

                        {/* Card 2 - Secundaria (Guías oficiales) - Verde claro */}
                        <Card className="absolute top-28 left-0 w-56 p-6 bg-gradient-to-br from-green-100 to-emerald-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-xl border-2 border-white">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-3 shadow-md">
                                <span className="material-symbols-outlined text-green-600" style={{fontSize: '28px'}}>
                                    verified
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Guías oficiales</h3>
                            <p className="text-sm text-gray-600">Basado en recomendaciones del MINSA, OMS y OPS.</p>
                        </Card>

                        {/* Card 3 - Acento (Disponible 24/7) - Azul/Celeste */}
                        <Card className="absolute bottom-16 right-16 w-60 p-5 bg-gradient-to-br from-cyan-100 to-blue-100 shadow-xl border-2 border-white hover:scale-110 transition-transform">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg">
                                    <span className="material-symbols-outlined" style={{fontSize: '24px'}}>
                                        devices
                                    </span>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-600 font-medium">Disponible</p>
                                    <p className="text-lg font-bold text-gray-900">24/7</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600">Funciona en tu celular o computadora, cuando lo necesites.</p>
                        </Card>

                        {/* Card 4 - Mini floating (Privacidad) - Amarillo */}
                        <Card className="absolute top-0 left-36 w-36 h-36 p-4 flex flex-col items-center justify-center text-center hover:scale-110 transition-transform duration-300 shadow-lg border-2 border-white bg-gradient-to-br from-yellow-100 to-orange-100">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-2 shadow-sm">
                                <span className="material-symbols-outlined text-orange-600" style={{fontSize: '24px'}}>
                                    lock
                                </span>
                            </div>
                            <p className="text-sm font-semibold text-gray-700">Privacidad cuidada</p>
                        </Card>

                        {/* Elementos decorativos adicionales entre las cards */}
                        <div className="absolute bottom-28 left-12 w-16 h-16 border-4 border-pink-300 rounded-full opacity-40"></div>
                        <div className="absolute top-60 right-28 w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="absolute bottom-40 right-4 w-4 h-4 bg-green-400 rounded-full"></div>
                    </div>

                </div>

                {/* Sección de características abajo (solo visible en móvil) */}
                <div className="grid grid-cols-2 md:hidden gap-4 mt-12">
                    <Card className="p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-red-50 to-pink-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>
                                restaurant
                            </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Alimentación segura</h4>
                        <p className="text-xs text-gray-600">Alimentos ricos en hierro</p>
                    </Card>

                    <Card className="p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-emerald-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>
                                verified
                            </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Guías oficiales</h4>
                        <p className="text-xs text-gray-600">MINSA, OMS y OPS</p>
                    </Card>

                    <Card className="p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-yellow-50 to-orange-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>
                                lock
                            </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Privacidad cuidada</h4>
                        <p className="text-xs text-gray-600">Sin guardar datos</p>
                    </Card>

                    <Card className="p-4 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-cyan-50 to-blue-50">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                            <span className="material-symbols-outlined text-white" style={{fontSize: '20px'}}>
                                devices
                            </span>
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">Disponible 24/7</h4>
                        <p className="text-xs text-gray-600">Web y móvil</p>
                    </Card>
                </div>
            </div>
        </section>
    );
}