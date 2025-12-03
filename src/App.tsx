import { useState } from "react";
import { LandingPage } from "./components/pages/landing-page.tsx";
import { OnboardingForm } from "./components/pages/onboarding-form.tsx";
import { Chatbot } from "./components/pages/chatbot.tsx";
import type { BabyInfo } from "./types/baby";

type AppView = "landing" | "onboarding" | "chatbot";

function App() {
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

export default App;
