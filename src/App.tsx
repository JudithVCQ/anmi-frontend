// src/App.tsx

import {Routes, Route} from "react-router-dom";
import {useState} from "react";

// --- TUS COMPONENTES ACTUALES ---
import {LandingPage} from "./components/pages/landing-page.tsx";
import {OnboardingForm} from "./components/pages/onboarding-form.tsx";
import {Chatbot} from "./components/pages/chatbot.tsx";
import type {BabyInfo} from "./types/baby";

// --- TUS NUEVOS COMPONENTES (MAPA) ---
import MapaPage from "./components/pages/mapaPage";

// --- COMPONENTE DE APRENDIZAJE ---
import AprendeANMIPage from "./components/pages/aprendeANMIPage/aprende-anmi.page.tsx";

// ----------------------------------------------------------------------
// 1. COMPONENTE 'MAIN FLOW': Mantiene tu lógica original de estados
//    (Landing -> Onboarding -> Chatbot)
// ----------------------------------------------------------------------
type AppView = "landing" | "onboarding" | "chatbot";

function MainFlow() {
    const [currentView, setCurrentView] = useState<AppView>("landing");
    const [babyInfo, setBabyInfo] = useState<BabyInfo | null>(null);

    const handleStart = () => {
        setCurrentView("onboarding");
    };

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

    // Renderizado condicional clásico
    if (currentView === "onboarding") {
        return (
            <OnboardingForm
                onSubmit={handleFormSubmit}
                onBack={handleBackToLanding}
            />
        );
    }

    if (currentView === "chatbot") {
        return <Chatbot babyInfo={babyInfo} onEnd={handleEndChat}/>;
    }

    return <LandingPage onStart={handleStart}/>;
}

// ----------------------------------------------------------------------
// 2. COMPONENTE PRINCIPAL 'APP': Maneja las rutas (URLs)
// ----------------------------------------------------------------------
function App() {
    return (
        <Routes>
            {/* RUTA PRINCIPAL (http://localhost:5173/) */}
            {/* Muestra tu flujo actual: Landing -> Form -> Chat */}
            <Route path="/" element={<MainFlow/>}/>

            {/* RUTA DEL MAPA (http://localhost:5173/mapa) */}
            {/* Esta es la página a la que te lleva el botón "Ver recetas" */}
            <Route path="/mapa" element={<MapaPage/>}/>

            {/* RUTA DE APRENDE CON ANMI (http://localhost:5173/aprende-anmi) */}
            {/* Esta es la página educativa con videos y tips */}
            <Route path="/aprende-anmi" element={<AprendeANMIPage/>}/>

            {/* RUTA DE RECETAS (http://localhost:5173/recetas/costa, etc.) */}
            {/* Placeholder temporal hasta que creemos RecetasPage */}
            <Route
                path="/recetas/:region"
                element={
                    <div className="p-10 text-center">
                        <h1 className="text-2xl font-bold">Próximamente: Recetas</h1>
                        <p>Aquí cargaremos las recetas de la región seleccionada.</p>
                        <a href="/mapa" className="text-blue-500 underline">Volver al mapa</a>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;