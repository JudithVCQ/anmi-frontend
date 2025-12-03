// src/components/pages/recetasPage/RegionMap.tsx

"use client";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface RegionMapProps {
    region: 'costa' | 'sierra' | 'selva';
    // La URL de los archivos SVG
    sectionUrl: string; // Ej: /mapa/costaSection.svg
    kidUrl: string;     // Ej: /mapa/costaKid.svg
}

export function RegionMap({ region, sectionUrl, kidUrl }: RegionMapProps) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recetas/${region}`);
    };

    // **ESTILO CLAVE:** Usamos clases de Tailwind para los efectos
    const baseClasses = "absolute top-0 left-0 w-full h-full transition-opacity duration-300 pointer-events-none";

    // NOTA: Usar 'fill-current' y 'stroke-current' dentro del SVG para que funcione el Tailwind fill/stroke.

    return (
        // Contenedor que define el área de hover/click para la región
        // Ajusta el z-index si tienes problemas de superposición con otras regiones
        <div
            className="absolute inset-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            {/* 1. SVG BASE (La silueta de la región sin niño) */}
            {/* Es visible por defecto y se oculta en hover */}
            <img
                src={sectionUrl}
                alt={`${region} section`}
                className={`${baseClasses} ${isHovered ? 'opacity-0' : 'opacity-100'} fill-current stroke-slate-500 stroke-[0.8px]`}
                // El fill-current debe definirse en el componente padre si se usa.
            />

            {/* 2. SVG DE HOVER (La silueta con el niño) */}
            {/* Está oculto por defecto y se muestra en hover con el borde iluminado */}
            <img
                src={kidUrl}
                alt={`${region} kid illustration`}
                className={`${baseClasses} ${isHovered ? 'opacity-100' : 'opacity-0'} stroke-[#DB162F] stroke-[3px]`}
                // Efecto de sombra para simular el borde "iluminado"
                style={isHovered ? { filter: 'drop-shadow(0 0 5px rgba(219, 22, 47, 0.8))' } : {}}
            />
        </div>
    );
}