// src/components/pages/recetasPage/VideoSection.tsx
export function VideoSection({ videoId }: { videoId: string }) {
    return (
        <section
            className="w-full py-12 px-4 sm:px-6 lg:px-10 mt-12"
            style={{ backgroundColor: "#DBDFAC" }} // Vanilla Custard
        >
            <div className="max-w-4xl mx-auto text-center">

                {/* Título */}
                <h2
                    className="text-3xl sm:text-4xl font-extrabold mb-6"
                    style={{ color: "#383961" }} // Twilight Indigo
                >
                    Mira cómo preparar esta receta
                </h2>

                {/* Línea divisoria */}
                <div
                    className="w-24 h-1 mx-auto rounded-full mb-10"
                    style={{ backgroundColor: "#DB162F" }} // Flag Red
                />

                {/* Video */}
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-xl">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="Video de receta"
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}
