// src/App.tsx

import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Chatbot } from "./components/pages/chatbot.tsx";
import { LandingPage } from "./components/pages/landing-page.tsx";
import { OnboardingForm } from "./components/pages/onboarding-form.tsx";
import { useAnmiChat } from "./hooks/use-anmi-chat.ts";
import type { BabyInfo } from "./types/baby";
import MapaPage from "./components/pages/mapaPage";
import HigadoPrimaveralSierra from "./components/pages/recetasPage/sierra/higado-primaveral";
import SudaditoPescadoCosta from "./components/pages/recetasPage/costa/sudadito-de-pescado";
import PureYucaHigadoSelva from "./components/pages/recetasPage/selva/pure-yuca-higado.tsx";

function ChatbotRoute() {
    const navigate = useNavigate();
    const [babyInfo] = useState<BabyInfo | null>(() => {
        const saved = sessionStorage.getItem("babyInfo");
        return saved ? JSON.parse(saved) : null;
    });

    const chatState = useAnmiChat(babyInfo);

    const handleEnd = () => {
        sessionStorage.removeItem("babyInfo");
        sessionStorage.removeItem("chatPopup");
        navigate("/");
    };

    const handleMinimize = () => {
        sessionStorage.setItem("chatPopup", "true");
        navigate("/");
    };

    if (!babyInfo) {
        navigate("/formulario");
        return null;
    }

    return (
        <Chatbot
            babyInfo={babyInfo}
            onEnd={handleEnd}
            initialMode="fullscreen"
            onMinimize={handleMinimize}
            chatState={chatState}
        />
    );
}

function AppWithPopup() {
    const [showPopup, setShowPopup] = useState(false);
    const [babyInfo, setBabyInfo] = useState<BabyInfo | null>(null);

    useEffect(() => {
        const checkPopup = () => {
            const hasPopup = sessionStorage.getItem("chatPopup") === "true";
            const saved = sessionStorage.getItem("babyInfo");
            if (hasPopup && saved) {
                setShowPopup(true);
                setBabyInfo(JSON.parse(saved));
            } else {
                setShowPopup(false);
            }
        };

        checkPopup();
        const interval = setInterval(checkPopup, 100);
        return () => clearInterval(interval);
    }, []);

    const chatState = useAnmiChat(showPopup ? babyInfo : null);

    const closePopup = () => {
        sessionStorage.removeItem("chatPopup");
        sessionStorage.removeItem("babyInfo");
        setShowPopup(false);
    };

    const maximizePopup = () => {
        sessionStorage.removeItem("chatPopup");
        window.location.href = "/chatbot";
    };

    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage onStart={() => window.location.href = "/formulario"} />} />
                <Route path="/formulario" element={<OnboardingForm onSubmit={(data) => {
                    sessionStorage.setItem("babyInfo", JSON.stringify(data));
                    window.location.href = "/chatbot";
                }} onBack={() => window.location.href = "/"} />} />
                <Route path="/chatbot" element={<ChatbotRoute />} />
                <Route path="/mapa" element={<MapaPage />} />
                <Route path="/recetas/sierra/higado-primaveral" element={<HigadoPrimaveralSierra />} />
                <Route path="/recetas/costa/sudadito-de-pescado" element={<SudaditoPescadoCosta />} />
                <Route path="/recetas/selva/pure-yuca-higado" element={<PureYucaHigadoSelva />} />
            </Routes>

            {showPopup && babyInfo && (
                <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999 }}>
                    <Chatbot
                        babyInfo={babyInfo}
                        onEnd={closePopup}
                        initialMode="popup"
                        onClose={maximizePopup}
                        chatState={chatState}
                    />
                </div>
            )}
        </>
    );
}

function App() {
    return <AppWithPopup />;
}

export default App;