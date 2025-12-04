// src/components/pages/chatbot.tsx
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Send, Maximize2, Minimize2, AlertTriangle, RefreshCw } from "lucide-react"; // Añadí iconos nuevos
import { Header } from "../sections/header";
import type { BabyInfo } from "../../types/baby";

// IMPORTAMOS EL HOOK
// Definición temporal de Men


// --- Tipos e Interfaces ---
interface ChatbotDualModeProps {
    babyInfo: BabyInfo | null;
    onEnd: () => void;
    initialMode?: "popup" | "fullscreen";
    onClose?: () => void;
    chatState: ReturnType<typeof useAnmiChat>;
    onMinimize?: () => void;  // ✅ AGREGAR ESTA LÍNEA
}

interface ChatContentProps {
    mode: "popup" | "fullscreen";
    babyInfo: BabyInfo | null;
    messages: Mensaje[]; // Usamos el tipo Mensaje del hook
    input: string;
    loading: boolean;
    messagesEndRef: React.RefObject<HTMLDivElement | null>;
    onToggleMode: () => void;
    onClose: () => void;
    onInputChange: (value: string) => void;
    onSendMessage: () => void;
    onRetry?: () => void;
}

// --- Componente de Indicador de Escribiendo ---
function TypingIndicator() {
    return (
        <div className="flex justify-start">
            <div className="bg-white text-gray-800 border-2 border-gray-100 px-4 py-3 rounded-2xl shadow-sm">
                <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}

// --- Componente de Contenido del Chat ---
function ChatContent({
                         mode,
                         babyInfo,
                         messages,
                         input,
                         loading,
                         messagesEndRef,
                         onToggleMode,
                         onClose,
                         onInputChange,
                         onSendMessage,
                         onRetry
                     }: ChatContentProps) {
    return (
        <div className={`flex flex-col h-full bg-white ${mode === "popup" ? "rounded-2xl shadow-2xl border-2 border-gray-200" : "rounded-3xl shadow-2xl border-2 border-gray-200"}`}>

            {/* Header del chat */}
            <div className={`bg-gradient-to-r from-red-500 to-pink-500 px-4 sm:px-6 py-3 sm:py-4 relative overflow-hidden ${mode === "popup" ? "rounded-t-2xl" : "rounded-t-3xl"}`}>
                <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-pink-200">
                            <span className="text-2xl">🤖</span>
                        </div>
                        <div>
                            <h2 className="text-white font-bold text-base sm:text-lg flex items-center gap-2 drop-shadow-sm">
                                ANMI Assistant
                            </h2>
                            {babyInfo && (
                                <p className="text-white/95 text-xs sm:text-sm font-medium drop-shadow-sm">
                                    💚 {babyInfo.nombre}, {babyInfo.edad} meses
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={onToggleMode} className="w-9 h-9 bg-white/25 hover:bg-white/40 rounded-xl flex items-center justify-center transition-all">
                            {mode === "popup" ? <Maximize2 className="w-4 h-4 text-white" /> : <Minimize2 className="w-4 h-4 text-white" />}
                        </button>
                        <button onClick={onClose} className="w-9 h-9 bg-white/25 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all">
                            <span className="text-white text-lg font-bold">×</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 relative bg-gray-50">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.autor === "usuario" ? "justify-end" : "justify-start"} relative z-10`}>

                        {/* Avatar ANMI */}
                        {msg.autor === "anmi" && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center mr-2 flex-shrink-0 shadow-sm self-end mb-2">
                                <span className="text-white text-sm">🤖</span>
                            </div>
                        )}

                        <div className="flex flex-col max-w-[75%]">
                            {/* Alerta de Emergencia */}
                            {msg.esEmergencia && (
                                <div className="bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-t-lg flex items-center gap-1 border border-red-200 border-b-0">
                                    <AlertTriangle size={12} /> ATENCIÓN URGENTE
                                </div>
                            )}

                            {/* Burbuja de Mensaje */}
                            <div
                                className={`px-4 py-3 shadow-sm text-sm leading-relaxed whitespace-pre-wrap
                                    ${msg.esEmergencia ? "rounded-b-2xl rounded-tr-2xl bg-red-50 border border-red-200 text-red-900" :
                                    msg.esError ? "rounded-2xl bg-orange-50 border border-orange-200 text-orange-800" :
                                        msg.autor === "usuario"
                                            ? "bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-2xl rounded-tr-sm"
                                            : "bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-tl-sm"
                                }
                                `}
                            >
                                {msg.texto}
                            </div>

                            {/* Botón de Reintentar si hubo error */}
                            {msg.esReintentable && onRetry && (
                                <button onClick={onRetry} className="mt-1 self-start text-xs text-orange-600 flex items-center gap-1 hover:underline">
                                    <RefreshCw size={12} /> Reintentar
                                </button>
                            )}
                        </div>
                    </div>
                ))}

                {loading && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>

            {/* Input area */}
            <div className={`border-t border-gray-200 bg-white p-4 ${mode === "popup" ? "rounded-b-2xl" : "rounded-b-3xl"}`}>
                <div className="flex gap-2 items-center">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => onInputChange(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !loading && onSendMessage()}
                            placeholder="Pregunta sobre nutrición infantil..."
                            className="w-full px-5 py-3 pr-12 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all bg-gray-50"
                            disabled={loading}
                        />
                    </div>
                    <button
                        onClick={onSendMessage}
                        className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!input.trim() || loading}
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Componente Principal Exportado ---
export function Chatbot({ babyInfo, onEnd, initialMode = "fullscreen", onClose }: ChatbotDualModeProps) {
    const navigate = useNavigate();
    const [mode, setMode] = useState<"popup" | "fullscreen">(initialMode);
    const [input, setInput] = useState("");

    // AQUÍ CONECTAMOS EL HOOK
    const { mensajes, loading, enviarMensaje, reintentar } = useAnmiChat(babyInfo);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [mensajes, loading]);

    const toggleMode = () => {
        if (mode === "popup") {
            navigate("/chatbot");
        } else {
            if (onClose) onClose();
            navigate("/");
        }
    };

    const handleSendMessage = () => {
        if (!input.trim()) return;
        enviarMensaje(input); // Usamos la función del hook
        setInput("");
    };

    const handleHeaderNavigation = () => {
        if (mode === "fullscreen") setMode("popup");
    };

    const commonProps = {
        mode,
        babyInfo,
        messages: mensajes, // Pasamos los mensajes del hook
        input,
        loading, // Pasamos el estado de carga del hook
        messagesEndRef,
        onToggleMode: toggleMode,
        onClose: mode === "popup" && onClose ? onClose : onEnd,
        onInputChange: setInput,
        onSendMessage: handleSendMessage,
        onRetry: reintentar
    };

    if (mode === "popup") {
        return (
            <div className="fixed bottom-6 right-6 w-[420px] h-[650px] z-50">
                <ChatContent {...commonProps} />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
            {/* ... (Todo tu código decorativo de fondo se mantiene igual) ... */}

            <Header showButton={false} onButtonClick={handleHeaderNavigation} />

            <div className="flex-1 flex items-center justify-center p-4 pt-20 pb-8 relative z-10">
                <div className="w-full max-w-4xl h-[calc(100vh-8rem)]">
                    <ChatContent {...commonProps} />
                </div>
            </div>
        </div>
    );
}

// El ChatbotWrapper se mantiene igual que en tu archivo original
export function ChatbotWrapper({ babyInfo, onEnd }: { babyInfo: BabyInfo | null; onEnd: () => void }) {
    const [isOpen, setIsOpen] = useState(false);
    const chatState = useAnmiChat(babyInfo); // ✅ AGREGAR ESTA LÍNEA

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-red-500 via-pink-500 to-red-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
                >
                    <MessageCircle className="w-7 h-7 text-white" />
                </button>
            )}
            {isOpen && (
                <Chatbot
                    babyInfo={babyInfo}
                    onEnd={onEnd}
                    initialMode="popup"
                    onClose={() => setIsOpen(false)}
                    onMinimize={()=> setIsOpen(false)}
                    chatState={chatState}
                />
            )}
        </>
    );
}