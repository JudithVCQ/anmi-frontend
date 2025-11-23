"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
    ShieldCheckIcon,
    SmartphoneIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    XCircleIcon,
    AlertCircleIcon,
    DropletIcon,
    TrendingUpIcon,
    AwardIcon,
} from "lucide-react";

interface LandingPageProps {
    onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white text-[#27231E]">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/95 border-b border-[#E8E4E0] backdrop-blur">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#B40023] p-2.5 rounded-xl shadow-sm">
                            <DropletIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-[#B40023]">ANMI</h1>
                            <p className="text-xs text-[#8B8680]">
                                Prevención de Anemia Infantil
                            </p>
                        </div>
                    </div>
                    <Button onClick={onStart} className="px-4 py-2">
                        <ArrowRightIcon className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Usar ANMI</span>
                        <span className="sm:hidden">Usar</span>
                    </Button>
                </div>
            </header>

            {/* Hero */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-block bg-[#C4E0F0] text-[#27231E] px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm">
                        Tu compañero de confianza en nutrición infantil
                    </div>
                    <h2 className="text-5xl sm:text-6xl font-bold text-[#27231E] mb-6 leading-tight text-balance">
                        Prevenir la anemia infantil es posible
                    </h2>
                    <p className="text-xl text-[#3D3A35] mb-8 leading-relaxed">
                        ANMI es un chatbot educativo que proporciona información clara,
                        segura y validada por nutricionistas para ayudarte a prevenir la
                        anemia en niños de 0 a 2 años.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            onClick={onStart}
                            className="px-8 py-4 text-lg font-semibold"
                        >
                            Comienza gratis ahora
                            <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </Button>
                        <Button
                            variant="outline"
                            className="px-8 py-4 text-lg font-semibold"
                        >
                            Saber más
                        </Button>
                    </div>
                </div>

                {/* Columna derecha: tarjetas */}
                <div className="hidden md:grid grid-cols-2 gap-6">
                    <Card className="p-6 bg-[#C4E0F0] border-[#B3D4E8] hover:shadow-lg transition-shadow">
                        <div className="bg-[#6B9EBD] text-white p-3 rounded-lg w-fit mb-4">
                            <TrendingUpIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#27231E] mb-2">
                            Alimentación segura
                        </h3>
                        <p className="text-sm text-[#3D3A35]">
                            Guía sobre alimentos ricos en hierro.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#FDF0B2] border-[#F5E899] hover:shadow-lg transition-shadow">
                        <div className="bg-[#C9A700] text-white p-3 rounded-lg w-fit mb-4">
                            <AwardIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#27231E] mb-2">Validado</h3>
                        <p className="text-sm text-[#3D3A35]">Basado en MINSA y OMS.</p>
                    </Card>

                    <Card className="p-6 bg-[#C4E0F0] border-[#B3D4E8] hover:shadow-lg transition-shadow">
                        <div className="bg-[#6B9EBD] text-white p-3 rounded-lg w-fit mb-4">
                            <ShieldCheckIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#27231E] mb-2">Privado y seguro</h3>
                        <p className="text-sm text-[#3D3A35]">
                            Tus datos están protegidos.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#F5F3F0] border-[#E8E4E0] hover:shadow-lg transition-shadow">
                        <div className="bg-[#6B9EBD] text-white p-3 rounded-lg w-fit mb-4">
                            <SmartphoneIcon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-[#27231E] mb-2">Disponible 24/7</h3>
                        <p className="text-sm text-[#3D3A35]">
                            Funciona en móvil y escritorio.
                        </p>
                    </Card>
                </div>
            </section>

            {/* ¿Por qué prevenir la anemia? */}
            <section className="bg-[#C4E0F0]/20 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#27231E] mb-4">
                            ¿Por qué prevenir la anemia infantil?
                        </h2>
                        <p className="text-xl text-[#3D3A35] max-w-3xl mx-auto">
                            La anemia afecta el desarrollo cognitivo, físico e inmunológico
                            de los niños. La prevención desde el nacimiento es clave.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-8 bg-white border border-[#E8E4E0] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#C4E0F0] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🧠</span>
                            </div>
                            <h3 className="font-bold text-[#27231E] mb-3">
                                Desarrollo cognitivo
                            </h3>
                            <p className="text-[#3D3A35] text-sm">
                                La falta de hierro afecta la memoria, concentración y
                                aprendizaje en etapas críticas del desarrollo cerebral.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border border-[#E8E4E0] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#C4E0F0] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">💪</span>
                            </div>
                            <h3 className="font-bold text-[#27231E] mb-3">
                                Crecimiento físico
                            </h3>
                            <p className="text-[#3D3A35] text-sm">
                                El hierro es esencial para el crecimiento normal, energía y
                                desarrollo motor de tu bebé.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border border-[#E8E4E0] hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-[#FDF0B2] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-2xl">🛡️</span>
                            </div>
                            <h3 className="font-bold text-[#27231E] mb-3">
                                Sistema inmunológico
                            </h3>
                            <p className="text-[#3D3A35] text-sm">
                                Un sistema inmune fuerte previene infecciones y enfermedades
                                frecuentes en la infancia.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Qué hace y qué NO hace ANMI */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#27231E] mb-4">
                        ¿Qué hace ANMI?
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Sí puede */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                                <CheckCircleIcon className="w-6 h-6 text-[#10B981]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#27231E]">
                                ANMI SÍ puede:
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Proporcionar información sobre alimentación rica en hierro.",
                                "Resolver dudas sobre lactancia y alimentación complementaria.",
                                "Explicar síntomas normales del desarrollo infantil.",
                                "Orientar sobre hábitos saludables de nutrición.",
                                "Detectar posibles señales de alerta y recomendarte consultar.",
                                "Guardar información de tu bebé de forma segura (con consentimiento).",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-3 p-4 bg-[#10B981]/5 rounded-lg border border-[#10B981]/20"
                                >
                                    <CheckCircleIcon className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                                    <p className="text-[#3D3A35] text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* No puede */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[#B40023]/10 rounded-full flex items-center justify-center">
                                <XCircleIcon className="w-6 h-6 text-[#B40023]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#27231E]">
                                ANMI NO puede:
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Reemplazar una consulta médica profesional.",
                                "Diagnosticar enfermedades o condiciones médicas.",
                                "Prescribir medicamentos o suplementos.",
                                "Proporcionar tratamiento médico.",
                                "Atender emergencias. En caso de urgencia, llama al 911 o acude a un centro de salud.",
                                "Guardar datos sin tu consentimiento.",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-3 p-4 bg-[#B40023]/10 rounded-lg border border-[#B40023]/20"
                                >
                                    <XCircleIcon className="w-5 h-5 text-[#B40023] flex-shrink-0 mt-0.5" />
                                    <p className="text-[#3D3A35] text-sm">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-[#B40023]/5 border-l-4 border-[#B40023] rounded-lg flex gap-4">
                    <AlertCircleIcon className="w-6 h-6 text-[#B40023] flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-[#B40023] mb-2">Importante</h4>
                        <p className="text-[#B40023]/90 text-sm">
                            Si sospechas que tu hijo tiene anemia o presenta síntomas graves,
                            consulta inmediatamente con un pediatra o nutricionista. ANMI es
                            una herramienta educativa complementaria.
                        </p>
                    </div>
                </div>
            </section>

            {/* Validación & confianza */}
            <section className="bg-[#F5F3F0] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#27231E] mb-4">
                            Información validada y confiable
                        </h2>
                        <p className="text-xl text-[#3D3A35]">
                            ANMI se basa en guías oficiales de salud infantil.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="p-8 bg-white border-2 border-[#C4E0F0] hover:shadow-lg transition-shadow text-center">
                            <div className="text-5xl mb-4">🏛️</div>
                            <h3 className="font-bold text-[#27231E] mb-3">MINSA</h3>
                            <p className="text-[#3D3A35] text-sm">
                                Normas y guías de salud materno infantil.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-2 border-[#C4E0F0] hover:shadow-lg transition-shadow text-center">
                            <div className="text-5xl mb-4">🌍</div>
                            <h3 className="font-bold text-[#27231E] mb-3">OMS</h3>
                            <p className="text-[#3D3A35] text-sm">
                                Recomendaciones internacionales basadas en evidencia.
                            </p>
                        </Card>

                        <Card className="p-8 bg-white border-2 border-[#FDF0B2] hover:shadow-lg transition-shadow text-center">
                            <div className="text-5xl mb-4">👨‍⚕️</div>
                            <h3 className="font-bold text-[#27231E] mb-3">Nutricionistas</h3>
                            <p className="text-[#3D3A35] text-sm">
                                Contenido validado por expertos en nutrición infantil.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section className="bg-[#C4E0F0] py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#27231E] mb-6">
                        Comienza hoy mismo
                    </h2>
                    <p className="text-xl text-[#3D3A35] mb-10 max-w-2xl mx-auto">
                        Únete a madres, padres y cuidadores que usan ANMI para prevenir la
                        anemia infantil y brindar lo mejor a sus hijos.
                    </p>
                    <Button
                        onClick={onStart}
                        className="bg-white hover:bg-[#F5F3F0] text-[#27231E] px-10 py-4 text-lg font-bold shadow-md"
                    >
                        Usar ANMI gratis
                        <ArrowRightIcon className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#3D3A35] text-[#F5F3F0] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[#8B8680]">
                        {/* Info */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="bg-[#B40023] p-2 rounded-lg">
                                    <DropletIcon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="font-bold text-white">ANMI</h4>
                            </div>
                            <p className="text-sm text-[#F5F3F0]">
                                Prevención de anemia infantil con información validada y segura.
                            </p>
                        </div>

                        {/* Enlaces */}
                        <div>
                            <h4 className="font-bold text-white mb-4">Enlaces</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Sobre ANMI
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Preguntas frecuentes
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Contacto
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Aviso de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Disclaimer médico
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#C4E0F0] transition-colors">
                                        Términos de uso
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Disclaimers */}
                    <div className="space-y-4 mb-6">
                        <div className="p-4 bg-[#8B8680]/20 rounded-lg border border-[#8B8680]/30">
                            <h5 className="font-semibold text-white mb-2">
                                ⚕️ Disclaimer médico
                            </h5>
                            <p className="text-xs text-[#F5F3F0]">
                                ANMI es una herramienta educativa y NO proporciona diagnóstico,
                                tratamiento ni reemplaza la consulta médica profesional. Si
                                sospechas que tu hijo tiene anemia o presenta síntomas graves,
                                consulta inmediatamente con un pediatra. En caso de emergencia,
                                llama al servicio de emergencias de tu país.
                            </p>
                        </div>
                        <div className="p-4 bg-[#8B8680]/20 rounded-lg border border-[#8B8680]/30">
                            <h5 className="font-semibold text-white mb-2">
                                🔒 Aviso de privacidad
                            </h5>
                            <p className="text-xs text-[#F5F3F0]">
                                Tu privacidad es importante. Tus datos personales y los de tu
                                bebé se guardan de forma segura y no se comparten con terceros.
                                Puedes solicitar eliminar tu información en cualquier momento
                                desde la aplicación.
                            </p>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="text-center text-xs text-[#8B8680] border-t border-[#8B8680] pt-8">
                        <p>© 2025 ANMI - Prevención de Anemia Infantil. Todos los derechos reservados.</p>
                        <p className="mt-2">Basado en guías MINSA y OMS.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
