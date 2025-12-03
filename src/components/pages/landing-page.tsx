// src/components/landing-page.tsx

"use client";

// Componentes de Layout (Header, Footer)
import { Header } from "../sections/header.tsx";
import { Footer } from "../sections/Footer.tsx";

// Componentes de Sección (DEBES IMPORTAR TODOS LOS QUE CREASTE)
import { SectionHero } from "../sections/SectionHero.tsx";
import { SectionConocenos } from "../sections/SectionConocenos.tsx";
import { SectionImportancia } from "../sections/SectionImportancia.tsx";
import { SectionFuncionalidades } from "../sections/SectionFuncionalidades.tsx";
import { SectionFuentes } from "../sections/SectionFuentes.tsx";
import { SectionCTA } from "../sections/SectionCTA.tsx";

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
            {/* IMPORTANTE: Le pasamos el ID 'inicio' */}
            <SectionHero id="inicio" onStart={onStart} />

            {/* 3. CONÓCENOS / MISIÓN ÉTICA */}
            {/* IMPORTANTE: Le pasamos el ID 'conocenos' */}
            <SectionConocenos id="conocenos" />

            {/* 4. IMPORTANCIA (Riesgos de anemia) */}
            {/* IMPORTANTE: Le pasamos el ID 'importancia' */}
            <SectionImportancia id="importancia" />

            {/* 5. FUNCIONALIDADES (Qué hace y qué NO hace ANMI) */}
            {/* IMPORTANTE: Le pasamos el ID 'funcionalidades' */}
            <SectionFuncionalidades id="funcionalidades" />

            {/* 6. FUENTES / VALIDACIÓN (MINSA, OMS, Equipo académico) */}
            {/* IMPORTANTE: Le pasamos el ID 'fuentes' */}
            <SectionFuentes id="fuentes" />

            {/* 7. CTA FINAL (Comienza hoy mismo) */}
            {/* IMPORTANTE: Le pasamos el ID 'cta' (Referenciado como Contacto en el Header) */}
            <SectionCTA id="cta" onStart={onStart} />

            {/* 8. FOOTER (Pie de página) */}
            <Footer />
        </div>
    );
}