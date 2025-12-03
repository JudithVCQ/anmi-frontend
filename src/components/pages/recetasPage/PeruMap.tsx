// src/components/pages/recetasPage/PeruMap.tsx

import { RegionMap } from './RegionMap';

export function PeruMap() {
    // Definimos las rutas a los archivos en la carpeta public
    const assets = {
        base: '/mapa/mapaPeru.svg',
        costa: { section: '/mapa/costaSection.svg', kid: '/mapa/costaKid.svg' },
        sierra: { section: '/mapa/sierraSection.svg', kid: '/mapa/sierraKid.svg' },
        selva: { section: '/mapa/selvaSection.svg', kid: '/mapa/selvaKid.svg' },
    };

    return (
        // Contenedor principal con posición relativa
        // El padding-top es un truco para mantener la proporción (Aspect Ratio) del mapa
        // Si tu mapa es de 500px ancho x 750px alto, el ratio es 150% (750/500 = 1.5)
        <div className="relative w-full max-w-lg mx-auto" style={{ aspectRatio: '500/750' }}>

            {/* 1. MAPA BASE (Fondo estático) */}
            <img
                src={assets.base}
                alt="Mapa del Perú"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />

            {/* 2. REGIONES INTERACTIVAS (Se superponen con absolute inset-0) */}

            {/* Costa */}
            <RegionMap
                region="costa"
                sectionUrl={assets.costa.section}
                kidUrl={assets.costa.kid}
            />

            {/* Sierra */}
            <RegionMap
                region="sierra"
                sectionUrl={assets.sierra.section}
                kidUrl={assets.sierra.kid}
            />

            {/* Selva */}
            <RegionMap
                region="selva"
                sectionUrl={assets.selva.section}
                kidUrl={assets.selva.kid}
            />
        </div>
    );
}