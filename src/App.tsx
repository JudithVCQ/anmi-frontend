// src/App.tsx

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// --- COMPONENTES ACTUALES ---
import { LandingPage } from "./components/pages/landing-page.tsx";
import { OnboardingForm } from "./components/pages/onboarding-form.tsx";
import { Chatbot } from "./components/pages/chatbot.tsx";
import type { BabyInfo } from "./types/baby";

// --- MAPA ---
import MapaPage from "./components/pages/mapaPage";

// --- RECETAS ESPECÍFICAS ---
import HigadoPrimaveralSierra from "./components/pages/recetasPage/sierra/higado-primaveral";
import SudaditoPescadoCosta from "./components/pages/recetasPage/costa/sudadito-de-pescado";
import PureYucaHigadoSelva from "./components/pages/recetasPage/selva/pure-yuca-higado.tsx";

// ---------------------------------------------
// 1. FLUJO PRINCIPAL (Landing -> Form -> Chat)
// ---------------------------------------------
type AppView = "landing" | "onboarding" | "chatbot";

function MainFlow() {
    const [currentView, setCurrentView] = useState<AppView>("landing");
    const [babyInfo, setBabyInfo] = useState<BabyInfo | null>(null);

    const handleStart = () => setCurrentView("onboarding");

    const handleBackToLanding = () => {
        setCurrentView("landing");
        setBabyInfo(null);
    };

    const handleFormSubmit = (data: BabyInfo) => {
        setBabyInfo(data);
        setCurrentView("chatbot");
    };

    const handleEndChat = () => {
        setCurrentView("landing");
        setBabyInfo(null);
    };

    if (currentView === "onboarding") {
        return (
            <OnboardingForm
                onSubmit={handleFormSubmit}
                onBack={handleBackToLanding}
            />
        );
    }

    if (currentView === "chatbot") {
        return <Chatbot babyInfo={babyInfo} onEnd={handleEndChat} />;
    }

    return <LandingPage onStart={handleStart} />;
}

// ------------------------------------------------
// 2. APP: Manejo de rutas
// ------------------------------------------------
function App() {
    return (
        <Routes>
            {/* HOME */}
            <Route path="/" element={<MainFlow />} />

            {/* MAPA */}
            <Route path="/mapa" element={<MapaPage />} />

            {/* ⭐ Receta específica de la Sierra */}
            <Route
                path="/recetas/sierra/higado-primaveral"
                element={<HigadoPrimaveralSierra />}
            />

            {/* ⭐ Nueva receta de la Costa */}
            <Route
                path="/recetas/costa/sudadito-de-pescado"
                element={<SudaditoPescadoCosta />}
            />

            {/* ⭐ Receta específica de la Selva */}
            <Route
                path="/recetas/selva/pure-yuca-higado"
                element={<PureYucaHigadoSelva />}
            />


            {/* Fallback general mientras creamos más recetas */}
            <Route
                path="/recetas/:region"
                element={
                    <div className="p-10 text-center">
                        <h1 className="text-2xl font-bold">Próximamente: Recetas</h1>
                        <p>Aquí cargaremos las recetas de la región seleccionada.</p>
                        <a href="/mapa" className="text-blue-500 underline">
                            Volver al mapa
                        </a>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
