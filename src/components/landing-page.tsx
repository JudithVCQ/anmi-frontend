"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Header } from "./header";

import {
    ShieldCheckIcon,
    SmartphoneIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    XCircleIcon,
    AlertCircleIcon,
    TrendingUpIcon,
    AwardIcon,
} from "lucide-react";

interface LandingPageProps {
    onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[#F0F9FF] text-slate-900">
            <Header showButton={true} onButtonClick={onStart} />

            {/* HERO con imagen de fondo y blobs */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="/fondo.jpg"
                        alt="Madre con su bebé"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 -z-[5]">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E0F2FE]/60 via-[#BAE6FD]/40 to-[#DBEAFE]/60" />
                    <div className="absolute -top-20 -left-16 w-64 h-64 bg-sky-200 rounded-full blur-3xl opacity-70" />
                    <div className="absolute -bottom-24 -right-10 w-72 h-72 bg-cyan-100 rounded-full blur-3xl opacity-70" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
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

                        {/* Badge ético/privacidad */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full text-xs text-sky-800 mb-6 border border-sky-100">
                            <ShieldCheckIcon className="w-4 h-4" />
                            <span>Sin cuentas · Sin almacenamiento permanente · Información respaldada</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={onStart}
                                className="px-8 py-4 text-lg font-semibold bg-[#DB162F] hover:bg-yellow-400 shadow-md text-white"
                            >
                                Comienza ahora
                                <ArrowRightIcon className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                                variant="outline"
                                className="px-8 py-4 text-lg font-semibold border-sky-200 text-sky-900 bg-white/70 hover:bg-sky-50"
                            >
                                Saber más
                            </Button>
                        </div>
                    </div>

                    {/* Columna derecha: tarjetas (sin foto porque ya tenemos fondo visual fuerte) */}
                    <div className="hidden md:grid grid-cols-2 gap-4">
                        <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                            <div className="bg-sky-100 text-sky-700 p-3 rounded-xl w-fit mb-4">
                                <TrendingUpIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">
                                Alimentación segura
                            </h3>
                            <p className="text-xs text-slate-600">
                                Información sobre alimentos ricos en hierro para tu bebé.
                            </p>
                        </Card>

                        <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                            <div className="bg-[#DB162F] text-white p-3 rounded-xl w-fit mb-4">
                                <AwardIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">
                                Basado en guías oficiales
                            </h3>
                            <p className="text-xs text-slate-600">
                                Contenido inspirado en recomendaciones del MINSA, OMS y OPS.
                            </p>
                        </Card>

                        <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                            <div className="bg-emerald-50 text-emerald-700 p-3 rounded-xl w-fit mb-4">
                                <ShieldCheckIcon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-sm">
                                Privacidad cuidada
                            </h3>
                            <p className="text-xs text-slate-600">
                                No se crean cuentas ni se guardan tus datos de forma permanente.
                            </p>
                        </Card>

                        <Card className="p-6 bg-white/80 border border-sky-100 backdrop-blur hover:shadow-lg transition-shadow rounded-2xl">
                            <div className="bg-slate-900 text-white p-3 rounded-xl w-fit mb-4">
                                <SmartphoneIcon className="w-6 h-6" />
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

            {/* ¿Por qué prevenir la anemia? */}
            <section className="bg-[#FFF9E6] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                            ¿Por qué prevenir la anemia infantil?
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            La anemia afecta el desarrollo cognitivo, físico e inmunológico
                            de los niños. Cuidar la alimentación desde el inicio marca una
                            gran diferencia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="relative p-8 border border-sky-100 hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="/desarrollo-cognitivo.jpg"
                                    alt="Desarrollo cognitivo"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-white/85" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                                    <span className="text-2xl">🧠</span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">
                                    Desarrollo cognitivo
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    La falta de hierro puede afectar la memoria, la atención y el
                                    aprendizaje en etapas clave del desarrollo cerebral.
                                </p>
                            </div>
                        </Card>

                        <Card className="relative p-8 border border-sky-100 hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="/crecimiento-fisico.jpg"
                                    alt="Crecimiento físico"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-white/85" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                                    <span className="text-2xl">💪</span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">
                                    Crecimiento físico
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    El hierro es clave para que tu bebé tenga energía, se mueva,
                                    juegue y crezca de forma saludable.
                                </p>
                            </div>
                        </Card>


                        <Card className="relative p-8 border border-sky-100 hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src="/sistema-inmunologico.jpg"
                                    alt="Sistema inmunológico"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-white/85" />
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-4">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">
                                    Sistema inmunológico
                                </h3>
                                <p className="text-slate-600 text-sm">
                                    Una buena nutrición ayuda a que el sistema de defensas de tu
                                    bebé sea más fuerte frente a infecciones y enfermedades.
                                </p>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

            {/* Qué hace y qué NO hace ANMI */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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

            {/* Validación & confianza */}
            <section className="bg-[#FFFBF0] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                            Información validada y confiable
                        </h2>
                        <p className="text-xl text-slate-600">
                            ANMI utiliza contenido pre-cargado y revisado a partir de guías
                            oficiales de salud infantil.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <img src="/minsa.jpg" alt="Logo MINSA" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">MINSA</h3>
                            <p className="text-slate-600 text-sm">
                                Basado en normas y guías de salud materno-infantil del
                                Ministerio de Salud.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <img src="/oms.png" alt="Logo OMS" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">OMS / OPS</h3>
                            <p className="text-slate-600 text-sm">
                                Referencias de recomendaciones internacionales basadas en
                                evidencia.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-2 border-sky-100 hover:shadow-lg transition-shadow text-center rounded-2xl">
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                <img src="/unmsm.png" alt="Logo UNMSM" className="w-full h-full object-contain" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-3">
                                Equipo académico
                            </h3>
                            <p className="text-slate-600 text-sm">
                                Contenido preparado y revisado por el equipo del proyecto, con
                                enfoque ético y responsable.
                            </p>
                        </Card>

                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-[#DB162F] py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        Comienza hoy mismo
                    </h2>
                    <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
                        Usa ANMI como apoyo para cuidar la alimentación de tu bebé y
                        acompañarlo en sus primeros pasos con más información y
                        tranquilidad.
                    </p>
                    <Button
                        onClick={onStart}
                        className="bg-white hover:bg-slate-100 text-[#DB162F] px-10 py-4 text-lg font-bold shadow-md"
                    >
                        Usar ANMI
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-200 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
                        {/* Info */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <img
                                    src="/logo-blanco.svg"
                                    alt="ANMI Logo"
                                    className="h-10 w-auto"
                                />
                            </div>
                            <p className="text-sm text-slate-300">
                                Asistente educativo para la prevención de anemia infantil, con
                                información clara y responsable.
                            </p>
                        </div>


                        {/* Enlaces */}
                        <div>
                            <h4 className="font-bold text-slate-100 mb-4">Enlaces</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Sobre ANMI
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Preguntas frecuentes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-bold text-slate-100 mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Aviso de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Disclaimer médico
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-sky-200 transition-colors">
                                        Términos de uso
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="text-center text-xs text-slate-500 border-t border-slate-800 pt-8">
                        <p>
                            © 2025 ANMI - Prevención de Anemia Infantil. Todos los derechos
                            reservados.
                        </p>
                        <p className="mt-2">
                            Contenido basado en guías del MINSA, OMS y OPS y adaptado con
                            fines educativos.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
