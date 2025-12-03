"use client";

import { useState } from "react";
import type { BabyInfo } from "../types/baby";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Header } from "./sections/header.tsx";

interface OnboardingFormProps {
    onSubmit: (data: BabyInfo) => void;
    onBack: () => void;
}

type Step = "terms" | "form";

export function OnboardingForm({ onSubmit, onBack }: OnboardingFormProps) {
    const [step, setStep] = useState<Step>("terms");

    const [form, setForm] = useState<BabyInfo>({
        nombre: "",
        edad: "",
        lactancia: "",
        alergias: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
            <Header showButton={false} />

            <div className="flex-1 flex items-center justify-center px-4 py-8">
                <Card className="w-full max-w-2xl p-10 bg-white border-gray-200 rounded-xl shadow-sm">
                    {step === "terms" ? (
                        <>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                                Términos y condiciones de uso
                            </h2>

                            <div className="space-y-4 text-sm leading-relaxed text-gray-700 mb-8">
                                <p>
                                    ANMI es un asistente educativo desarrollado con fines
                                    académicos. Su contenido es informativo y se basa en guías
                                    oficiales de salud infantil.
                                </p>

                                <p>
                                    ANMI no proporciona diagnóstico médico, tratamiento,
                                    prescripción, ni planes nutricionales personalizados. La
                                    información presentada no sustituye la consulta con un
                                    profesional de la salud.
                                </p>

                                <p>
                                    La información que ingreses se utiliza únicamente durante la
                                    sesión activa con el asistente y no se almacena, registra,
                                    conserva ni comparte con terceros. Esta práctica sigue los
                                    principios de consentimiento informado, finalidad,
                                    proporcionalidad y seguridad establecidos en la Ley N.º 29733,
                                    Ley de Protección de Datos Personales del Perú.
                                </p>

                                <p>
                                    El equipo desarrollador del proyecto académico ANMI no asume
                                    responsabilidad por decisiones tomadas únicamente con base en
                                    la información proporcionada por esta herramienta.
                                </p>

                                <p>
                                    Si tu bebé presenta síntomas preocupantes, o requieres un
                                    diagnóstico o un plan nutricional personalizado, debes acudir
                                    a un pediatra o nutricionista certificado.
                                </p>
                            </div>

                            <div className="flex justify-between pt-2">
                                <Button variant="outline" type="button" onClick={onBack}>
                                    Volver
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => setStep("form")}
                                    className="px-6"
                                >
                                    Acepto y continuar
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                                Cuéntanos sobre tu bebé
                            </h2>
                            <p className="text-sm text-gray-600 mb-6">
                                Esta información se usa únicamente durante esta sesión para
                                adaptar las recomendaciones. No se guarda de forma permanente.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">
                                        Nombre del bebé
                                    </label>
                                    <input
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">
                                        Edad (en meses)
                                    </label>
                                    <input
                                        name="edad"
                                        value={form.edad}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                                        placeholder="Ej: 6"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">
                                        Tipo de lactancia
                                    </label>
                                    <select
                                        name="lactancia"
                                        value={form.lactancia}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                                        required
                                    >
                                        <option value="">Selecciona una opción</option>
                                        <option value="exclusiva">Lactancia materna exclusiva</option>
                                        <option value="mixta">Mixta</option>
                                        <option value="formula">Solo fórmula</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700">
                                        Alergias conocidas
                                    </label>
                                    <input
                                        name="alergias"
                                        value={form.alergias}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                                        placeholder="Si no hay, escribe 'ninguna'"
                                    />
                                </div>

                                <div className="flex justify-between pt-4">
                                    <Button
                                        variant="outline"
                                        type="button"
                                        onClick={() => setStep("terms")}
                                    >
                                        Ver términos nuevamente
                                    </Button>
                                    <Button type="submit">Ir al chatbot</Button>
                                </div>
                            </form>
                        </>
                    )}
                </Card>
            </div>
        </div>
    );
}
