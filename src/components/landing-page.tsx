// src/components/landing-page.tsx

"use client";

// Componentes de Layout (Header, Footer)
import { Header } from "./sections/header.tsx";
import { Footer } from "./sections/Footer";

// Componentes de Sección (DEBES IMPORTAR TODOS LOS QUE CREASTE)
import { SectionHero } from "./sections/SectionHero";
import { SectionConocenos } from "./sections/SectionConocenos";
import { SectionImportancia } from "./sections/SectionImportancia";
import { SectionFuncionalidades } from "./sections/SectionFuncionalidades";
import { SectionFuentes } from "./sections/SectionFuentes";
import { SectionCTA } from "./sections/SectionCTA";

interface LandingPageProps {
    onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
    return (
        <div className="min-h-screen flex flex-col bg-[#F0F9FF] text-slate-900">
            {/* 1. Header Fijo (se mantiene) */}
            <Header showButton={true} onButtonClick={onStart} />

            {/* Ensamblaje de las secciones en el orden de scroll */}

            {/* 2. INICIO / HERO */}
            <SectionHero onStart={onStart} />

            {/* 3. CONÓCENOS / MISIÓN ÉTICA (Nuevo componente sobre el equipo) */}
            <SectionConocenos />

            {/* 4. IMPORTANCIA (Riesgos de anemia) */}
            <SectionImportancia />

            {/* 5. FUNCIONALIDADES (Qué hace y qué NO hace ANMI) */}
            <SectionFuncionalidades />

            {/* 6. FUENTES / VALIDACIÓN (MINSA, OMS, Equipo académico) */}
            <SectionFuentes />

            {/* 7. CTA FINAL (Comienza hoy mismo) */}
            <SectionCTA onStart={onStart} />

            {/* 8. FOOTER (Pie de página) */}
            <Footer />
        </div>
    );
}