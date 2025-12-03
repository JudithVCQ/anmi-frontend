"use client";

import { Button } from "../ui/button";
import { Card } from "../ui/card";
// ❌ YA NO NECESITAS IMPORTAR ICONOS DE 'lucide-react' ❌

interface SectionHeroProps {
    onStart: () => void;
}

// Estilo base para todos los iconos de Google Icons
const iconStyle = {
    fontSize: '24px', // Tamaño del icono (ajustado a w-6 h-6 en tu diseño original)
    lineHeight: '1',  // Para centrado y alineación
};

export function SectionHero({ onStart }: SectionHeroProps) {
    return (
        <section id="inicio" className="relative overflow-hidden">
            {/* Fondo */}
            <div className="absolute inset-0 -z-10">
                <img
                    src="/fondo.jpg"
                    alt="Madre con su bebé"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Efectos / Blobs */}
            <div className="absolute inset-0 -z-[5]">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E0F2FE]/60 via-[#BAE6FD]/40 to-[#DBEAFE]/60" />
                <div className="absolute -top-20 -left-16 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-70" />
                <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-70" />
            </div>

            {/* Contenido Principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
                {/* Columna Izquierda */}
                <div>
                    <div className="inline-flex items-center gap-2 bg-white/80 text-sky-900 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-sky-100">
                        <span className="inline-block w-2 h-2 rounded-full bg-[#DB162F]" />
                        <span>Tu compañero de confianza en nutrición infantil</span>
                    </div>
                    <h2 className="text-5xl sm:text-6xl font-extrabold text-slate-900 mb-6 leading-tight text-balance drop-shadow-sm">
                        Prevenir la anemia infantil es posible
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-700 mb-6 leading-relaxed">
                        ANMI es un asistente educativo que te ofrece información clara y
                        basada en guías oficiales para ayudarte a prevenir la anemia por
                        deficiencia de hierro en tu bebé, especialmente durante los
                        primeros meses de alimentación complementaria.
                    </p>

                    {/* Badge ético/privacidad - Icono cambiado */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-xs text-sky-800 mb-6 border border-sky-100">
                        <span className="material-symbols-outlined w-4 h-4" style={{ fontSize: '16px' }}>
                            verified_user
                        </span>
                        <span>Sin cuentas · Sin almacenamiento permanente · Información respaldada</span>
                    </div>

                    {/* Botones - Icono de flecha cambiado */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={onStart}
                            className="px-8 py-4 text-lg font-semibold bg-[#DB162F] hover:bg-yellow-400 shadow-md text-white"
                        >
                            Comienza ahora
                            <span className="material-symbols-outlined text-xl ml-2">
                                arrow_forward
                            </span>
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-4 text-lg font-semibold border-sky-200 text-sky-900 bg-white/70 hover:bg-sky-50"
                        >
                            Saber más
                        </Button>
                    </div>
                </div>

                {/* Columna Derecha: Tarjetas - Iconos cambiados */}
                <div className="hidden md:grid grid-cols-2 gap-4">
                    {/* Alimentación segura: TrendingUpIcon -> Local Fire Department (o similar) */}
                    <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                        <div className="bg-sky-100 text-sky-700 p-3 rounded-xl w-fit mb-4">
                            <span className="material-symbols-outlined" style={iconStyle}>
                                restaurant
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm">
                            Alimentación segura
                        </h3>
                        <p className="text-xs text-slate-600">
                            Información sobre alimentos ricos en hierro para tu bebé.
                        </p>
                    </Card>

                    {/* Basado en guías oficiales: AwardIcon -> Gavel / Verified */}
                    <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                        <div className="bg-[#DB162F] text-white p-3 rounded-xl w-fit mb-4">
                            <span className="material-symbols-outlined" style={iconStyle}>
                                verified
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm">
                            Basado en guías oficiales
                        </h3>
                        <p className="text-xs text-slate-600">
                            Contenido inspirado en recomendaciones del MINSA, OMS y OPS.
                        </p>
                    </Card>

                    {/* Privacidad cuidada: ShieldCheckIcon -> Lock */}
                    <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                        <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl w-fit mb-4">
                            <span className="material-symbols-outlined" style={iconStyle}>
                                lock
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm">
                            Privacidad cuidada
                        </h3>
                        <p className="text-xs text-slate-600">
                            No se crean cuentas ni se guardan tus datos de forma permanente.
                        </p>
                    </Card>

                    {/* Disponible 24/7: SmartphoneIcon -> Devices */}
                    <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                        <div className="bg-slate-900 text-white p-3 rounded-xl w-fit mb-4">
                            <span className="material-symbols-outlined" style={iconStyle}>
                                devices
                            </span>
                        </div>
                        <h3 className="font-bold text-slate-900 mb-2 text-sm">
                            Disponible 24/7
                        </h3>
                        <p className="text-xs text-slate-600">
                            Funciona en tu celular o computadora, cuando lo necesites.
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}