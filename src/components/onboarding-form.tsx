"use client";

import { useState } from "react";
import type { BabyInfo } from "../types/baby";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface OnboardingFormProps {
    onSubmit: (data: BabyInfo) => void;
    onBack: () => void;
}

export function OnboardingForm({ onSubmit, onBack }: OnboardingFormProps) {
    const [form, setForm] = useState<BabyInfo>({
        nombre: "",
        edad: "",
        lactancia: "",
        alergias: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[#F5F3F0]">
            <Card className="w-full max-w-xl p-8">
                <h2 className="text-2xl font-bold mb-2 text-[#27231E]">
                    Cuéntanos sobre tu bebé
                </h2>
                <p className="text-sm text-[#3D3A35] mb-6">
                    Esta información ayuda a adaptar las recomendaciones. El correo es
                    opcional.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Nombre del bebé
                        </label>
                        <input
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Edad (en meses)
                        </label>
                        <input
                            name="edad"
                            value={form.edad}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                            placeholder="Ej: 6"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Tipo de lactancia
                        </label>
                        <select
                            name="lactancia"
                            value={form.lactancia}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                            required
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="exclusiva">Lactancia materna exclusiva</option>
                            <option value="mixta">Mixta</option>
                            <option value="formula">Solo fórmula</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Alergias conocidas
                        </label>
                        <input
                            name="alergias"
                            value={form.alergias}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                            placeholder="Si no hay, escribe “ninguna”"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Correo electrónico (opcional)
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email ?? ""}
                            onChange={handleChange}
                            className="w-full rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                            placeholder="Para guardar registro de tu bebé"
                        />
                    </div>

                    <div className="flex justify-between pt-4">
                        <Button variant="outline" type="button" onClick={onBack}>
                            Volver
                        </Button>
                        <Button type="submit">Ir al chatbot</Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}
