"use client";

import { useState } from "react";
import type { BabyInfo } from "../../types/baby.ts";
import { Button } from "../ui/button.tsx";
import { Card } from "../ui/card.tsx";
import { enviarPregunta } from "../../lib/api.ts";
import { Header } from "../sections/header.tsx";

interface ChatbotProps {
    babyInfo: BabyInfo | null;
    onEnd: () => void;
}

interface Mensaje {
    autor: "usuario" | "anmi";
    texto: string;
}

export function Chatbot({ babyInfo, onEnd }: ChatbotProps) {
    const [input, setInput] = useState("");
    const [mensajes, setMensajes] = useState<Mensaje[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        const texto = input.trim();
        if (!texto) return;

        setMensajes((prev) => [...prev, { autor: "usuario", texto }]);
        setInput("");
        setLoading(true);

        try {
            const data = await enviarPregunta(texto);

            const respuesta: string =
                data?.respuesta ??
                "Por ahora no tengo una respuesta registrada para esta pregunta. Te recomiendo consultar con un profesional de salud.";

            const nivel = data?.nivelEmergencia
                ? ` (Nivel: ${data.nivelEmergencia})`
                : "";

            setMensajes((prev) => [
                ...prev,
                { autor: "anmi", texto: respuesta + nivel },
            ]);
        } catch (err) {
            console.error(err);
            setMensajes((prev) => [
                ...prev,
                {
                    autor: "anmi",
                    texto:
                        "Hubo un problema al comunicarme con el servidor. Intenta de nuevo o consulta con un profesional de salud.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#F5F3F0]">
            <Header showButton={false} />
            <div className="flex-1 flex items-center justify-center px-4 py-8">
                <Card className="w-full max-w-3xl p-6 flex flex-col gap-4 bg-[#F5F3F0] border-[#E8E4E0]">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-[#27231E]">Chat con ANMI</h2>
                            {babyInfo && (
                                <p className="text-xs text-[#3D3A35] mt-1">
                                    Conversando sobre: <strong>{babyInfo.nombre}</strong>,{" "}
                                    {babyInfo.edad} meses.
                                </p>
                            )}
                        </div>
                        <Button variant="outline" onClick={onEnd}>
                            Terminar
                        </Button>
                    </div>

                    <div className="flex-1 min-h-[260px] max-h-[380px] overflow-y-auto space-y-3 rounded-lg bg-white/80 p-3 border border-[#E8E4E0]">
                        {mensajes.length === 0 && (
                            <p className="text-sm text-[#8B8680]">
                                Escribe tu primera pregunta sobre prevención de anemia, lactancia
                                o alimentación complementaria.
                            </p>
                        )}

                        {mensajes.map((m, i) => (
                            <div
                                key={i}
                                className={m.autor === "usuario" ? "text-right" : "text-left"}
                            >
                                <div
                                    className={
                                        "inline-block px-3 py-2 rounded-2xl text-sm " +
                                        (m.autor === "usuario"
                                            ? "bg-[#C4E0F0] text-[#27231E]"
                                            : "bg-white text-[#27231E] border border-[#E8E4E0]")
                                    }
                                >
                                    {m.texto}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 pt-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe tu pregunta..."
                            className="flex-1 rounded-lg border border-[#E8E4E0] px-3 py-2 text-sm"
                        />
                        <Button onClick={handleSend} disabled={loading}>
                            {loading ? "Enviando..." : "Enviar"}
                        </Button>
                    </div>

                    <p className="text-[11px] text-[#8B8680] mt-1">
                        ANMI es una herramienta educativa y no reemplaza una consulta médica.
                        En caso de síntomas graves o emergencia, acude a un centro de salud o
                        llama a emergencias.
                    </p>
                </Card>
            </div>
        </div>
    );

}
