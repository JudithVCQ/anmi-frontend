import { useState } from "react";
        import { Card } from "../ui/card";
        import { Header } from "../sections/header";

        interface BabyInfo {
            nombre: string;
            edad: string;
            lactancia: string;
            alergias: string;
        }

        interface OnboardingFormProps {
            onSubmit: (data: BabyInfo) => void;
            onBack: () => void;
        }

        export function OnboardingForm({ onSubmit, onBack }: OnboardingFormProps) {
            const [currentStep, setCurrentStep] = useState(1);
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

            const canProceedStep2 = form.nombre.trim() !== "" && form.edad.trim() !== "";
            const canProceedStep3 = form.lactancia !== "";

            return (
                <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                    <Header showButton={false} />

                    <div className="flex-1 flex items-center justify-center px-4 py-8">
                        <Card className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border-0 overflow-hidden">
                            {/* Progress Bar */}
                            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-1.5">
                                <div
                                    className="bg-white h-full transition-all duration-500 ease-out"
                                    style={{ width: `${((4 - currentStep) / 4) * 100}%`, marginLeft: 'auto' }}
                                ></div>
                            </div>

                            {/* Step Indicators */}
                            <div className="px-8 pt-8 pb-4">
                                <div className="flex items-center justify-between max-w-md mx-auto">
                                    {[1, 2, 3, 4].map((step) => (
                                        <div key={step} className="flex items-center">
                                            <div className="flex flex-col items-center">
                                                <div
                                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                                                        currentStep > step
                                                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                                                            : currentStep === step
                                                                ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg scale-110'
                                                                : 'bg-slate-200 text-slate-400'
                                                    }`}
                                                >
                                                    {currentStep > step ? '✓' : step}
                                                </div>
                                                <span className={`text-xs mt-2 font-medium ${
                                                    currentStep >= step ? 'text-slate-700' : 'text-slate-400'
                                                }`}>
                                                    {step === 1 ? 'Términos' : step === 2 ? 'Datos' : step === 3 ? 'Lactancia' : 'Alergias'}
                                                </span>
                                            </div>
                                            {step < 4 && (
                                                <div className={`w-12 sm:w-20 h-1 mx-2 rounded-full transition-all duration-300 ${
                                                    currentStep > step ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-slate-200'
                                                }`}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="px-8 py-8 min-h-[400px]">
                                {/* Step 1: Términos */}
                                {currentStep === 1 && (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <span className="text-4xl">📋</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                                Términos y condiciones de uso
                                            </h2>
                                            <p className="text-slate-600">Por favor, lee cuidadosamente antes de continuar</p>
                                        </div>

                                        <div className="bg-slate-50 rounded-2xl p-6 max-h-64 overflow-y-auto space-y-4 text-sm leading-relaxed text-slate-700 border border-slate-200">
                                            <p>
                                                ANMI es un asistente educativo desarrollado con fines académicos. Su contenido es informativo y se basa en guías oficiales de salud infantil.
                                            </p>
                                            <p>
                                                ANMI no proporciona diagnóstico médico, tratamiento, prescripción, ni planes nutricionales personalizados. La información presentada no sustituye la consulta con un profesional de la salud.
                                            </p>
                                            <p>
                                                La información que ingreses se utiliza únicamente durante la sesión activa con el asistente y no se almacena, registra, conserva ni comparte con terceros. Esta práctica sigue los principios de consentimiento informado, finalidad, proporcionalidad y seguridad establecidos en la Ley N.º 29733, Ley de Protección de Datos Personales del Perú.
                                            </p>
                                            <p>
                                                El equipo desarrollador del proyecto académico ANMI no asume responsabilidad por decisiones tomadas únicamente con base en la información proporcionada por esta herramienta.
                                            </p>
                                            <p>
                                                Si tu bebé presenta síntomas preocupantes, o requieres un diagnóstico o un plan nutricional personalizado, debes acudir a un pediatra o nutricionista certificado.
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                                            <span className="text-2xl">✓</span>
                                            <p className="text-sm text-green-800 font-medium">
                                                Al continuar, aceptas estos términos y condiciones
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Datos básicos */}
                                {currentStep === 2 && (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <span className="text-4xl">👶</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                                Cuéntanos sobre tu bebé
                                            </h2>
                                            <p className="text-slate-600">Esta información se usa solo durante esta sesión</p>
                                        </div>

                                        <div className="space-y-4 max-w-md mx-auto">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-slate-700">
                                                    Nombre del bebé
                                                </label>
                                                <input
                                                    name="nombre"
                                                    value={form.nombre}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                                    placeholder="Escribe el nombre aquí"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-slate-700">
                                                    Edad (en meses)
                                                </label>
                                                <input
                                                    name="edad"
                                                    type="number"
                                                    value={form.edad}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                                    placeholder="Ejemplo: 6"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Lactancia */}
                                {currentStep === 3 && (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <span className="text-4xl">🍼</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                                Tipo de lactancia
                                            </h2>
                                            <p className="text-slate-600">Selecciona la opción que mejor describa la situación actual</p>
                                        </div>

                                        <div className="space-y-3 max-w-md mx-auto">
                                            {[
                                                { value: 'exclusiva', label: 'Lactancia materna exclusiva', emoji: '🤱' },
                                                { value: 'mixta', label: 'Mixta (leche materna + fórmula)', emoji: '🍼' },
                                                { value: 'formula', label: 'Solo fórmula', emoji: '🍶' }
                                            ].map((option) => (
                                                <button
                                                    key={option.value}
                                                    type="button"
                                                    onClick={() => setForm(prev => ({ ...prev, lactancia: option.value }))}
                                                    className={`w-full p-4 rounded-xl border-2 transition-all text-left flex items-center gap-4 ${
                                                        form.lactancia === option.value
                                                            ? 'border-purple-500 bg-purple-50 shadow-md'
                                                            : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    <span className="text-3xl">{option.emoji}</span>
                                                    <div className="flex-1">
                                                        <span className="font-semibold text-slate-900">{option.label}</span>
                                                    </div>
                                                    {form.lactancia === option.value && (
                                                        <span className="text-purple-600 text-xl">✓</span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Alergias */}
                                {currentStep === 4 && (
                                    <div className="space-y-6 animate-fadeIn">
                                        <div className="text-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                                <span className="text-4xl">⚠️</span>
                                            </div>
                                            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                                                Alergias conocidas
                                            </h2>
                                            <p className="text-slate-600">Esto nos ayuda a darte recomendaciones más seguras</p>
                                        </div>

                                        <div className="space-y-4 max-w-md mx-auto">
                                            <div>
                                                <label className="block text-sm font-semibold mb-2 text-slate-700">
                                                    Alergias o intolerancias alimentarias
                                                </label>
                                                <input
                                                    name="alergias"
                                                    value={form.alergias}
                                                    onChange={handleChange}
                                                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-sm focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                                                    placeholder="Si no hay, escribe 'ninguna'"
                                                />
                                            </div>

                                            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                                                <p className="text-sm text-blue-800">
                                                    <span className="font-semibold">💡 Ejemplo:</span> Alergia a la leche de vaca, intolerancia al gluten, etc.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer con botones */}
                            <div className="px-8 pb-8">
                                <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                                    {currentStep === 1 ? (
                                        <button
                                            onClick={onBack}
                                            className="px-6 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors rounded-xl hover:bg-slate-100"
                                        >
                                            ← Volver
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => setCurrentStep(currentStep - 1)}
                                            className="px-6 py-3 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors rounded-xl hover:bg-slate-100"
                                        >
                                            ← Anterior
                                        </button>
                                    )}

                                    {currentStep < 4 ? (
                                        <button
                                            onClick={() => setCurrentStep(currentStep + 1)}
                                            disabled={currentStep === 2 && !canProceedStep2}
                                            className={`px-8 py-3 text-sm font-bold rounded-xl transition-all ${
                                                (currentStep === 2 && !canProceedStep2) || (currentStep === 3 && !canProceedStep3)
                                                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                            }`}
                                        >
                                            Continuar →
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleSubmit}
                                            className="px-8 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all"
                                        >
                                            Ir al chatbot ✓
                                        </button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </div>

                    <style>{`
                        @keyframes fadeIn {
                            from {
                                opacity: 0;
                                transform: translateY(10px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        .animate-fadeIn {
                            animation: fadeIn 0.4s ease-out;
                        }
                    `}</style>
                </div>
            );
        }