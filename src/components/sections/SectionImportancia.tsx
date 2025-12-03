// src/components/sections/SectionImportancia.tsx

// Importa solo el componente Card
import { Card } from "../ui/card";

// 👈 AÑADIDO: Definición de la interfaz de propiedades para aceptar el 'id'
interface SectionImportanciaProps {
    id: string;
}

// MODIFICADO: Ahora la función recibe la prop 'id'
export function SectionImportancia({ id }: SectionImportanciaProps) {
    return (
        // ******************************************************
        // MODIFICADO: Usamos la prop 'id' en lugar del string fijo "importancia"
        // ******************************************************
        <section id={id} className="bg-[#FFF9E6] py-16 sm:py-24">
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
                    {/* Tarjeta 1: Desarrollo cognitivo */}
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

                    {/* Tarjeta 2: Crecimiento físico */}
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

                    {/* Tarjeta 3: Sistema inmunológico */}
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
    );
}