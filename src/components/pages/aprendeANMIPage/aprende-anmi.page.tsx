import { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Heart, Users, Award, Star, Sparkles, Baby, Utensils, Clock, CheckCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AprendeANMIPage = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [, setHoveredFeature] = useState<number | null>(null);
    const [, setHoveredTip] = useState<number | null>(null);

    const videos = [
        {
            title: "Etapa 6-8 meses",
            subtitle: "Papilla / textura aplastada",
            url: "https://www.youtube.com/embed/0gU2ekDF4p4",
            gradient: "from-[#A8D5E2] to-[#C5E8F3]",
            bgPattern: "bg-gradient-to-br from-[#E8F7FC] to-[#F0FAFF]",
            textColor: "text-[#2B7A9B]",
            icon: <Baby className="w-6 h-6" />,
            resumen: "En esta etapa, comienza la alimentación con papilla o comida con textura aplastada. Se inicia con 2 a 3 cucharadas, aumentando gradualmente hasta alcanzar 5 cucharadas. Es importante respetar los tiempos de adaptación del bebé.",
            edad: "6-8 meses",
            cantidad: "2-5 cucharadas"
        },
        {
            title: "Etapa 9-11 meses",
            subtitle: "Comida picada / triturada",
            url: "https://www.youtube.com/embed/w--KTD47zoo",
            gradient: "from-[#FFD93D] to-[#FFE86E]",
            bgPattern: "bg-gradient-to-br from-[#FFFBEA] to-[#FFF8DC]",
            textColor: "text-[#B8952B]",
            icon: <Utensils className="w-6 h-6" />,
            resumen: "A los 9-11 meses, el bebé comienza a comer comida picada o triturada, usando sus manos. Se aumenta la cantidad de comida a 5 a 7 cucharadas (aproximadamente 3/4 de un plato). Es una etapa en la que el bebé empieza a experimentar con nuevas texturas y sabores.",
            edad: "9-11 meses",
            cantidad: "5-7 cucharadas"
        },
        {
            title: "Etapa 12-23 meses",
            subtitle: "Comida en trozos / olla familiar",
            url: "https://www.youtube.com/embed/LuKZaUT67ZI",
            gradient: "from-[#9BC984] to-[#B5D9A1]",
            bgPattern: "bg-gradient-to-br from-[#F0F7ED] to-[#E8F5E0]",
            textColor: "text-[#4A6B3E]",
            icon: <Users className="w-6 h-6" />,
            resumen: "Durante esta etapa, el niño comienza a comer con la olla familiar y disfruta de comida en trozos. Es importante que el niño coma un plato mediano lleno (7-10 cucharadas). Asegúrate de ofrecerle comida variada y adecuada a su edad.",
            edad: "12-23 meses",
            cantidad: "7-10 cucharadas"
        }
    ];

    const features = [
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Videos Educativos",
            description: "Contenido visual paso a paso para cada etapa",
            color: "from-[#7EC8E3] to-[#A8D5E2]",
            bgColor: "bg-gradient-to-br from-[#E8F7FC] to-[#F0FAFF]",
            textColor: "text-[#2B7A9B]",
            emoji: "📚"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Alimentación Responsiva",
            description: "Respeta el ritmo y señales de tu bebé",
            color: "from-[#E85D75] to-[#F08396]",
            bgColor: "bg-gradient-to-br from-[#FFF0F3] to-[#FFE5EB]",
            textColor: "text-[#B8304A]",
            emoji: "❤️"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Prevención de Anemia",
            description: "Información oficial y segura",
            color: "from-[#9BC984] to-[#B5D9A1]",
            bgColor: "bg-gradient-to-br from-[#F0F7ED] to-[#E8F5E0]",
            textColor: "text-[#4A6B3E]",
            emoji: "🏆"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Apoyo Experto",
            description: "Basado en evidencia científica",
            color: "from-[#FFD93D] to-[#FFE86E]",
            bgColor: "bg-gradient-to-br from-[#FFFBEA] to-[#FFF8DC]",
            textColor: "text-[#B8952B]",
            emoji: "✨"
        }
    ];

    const tips = [
        {
            text: "Ofrece alimentos en diferentes texturas y sabores, permitiendo que el bebé explore.",
            icon: <Sparkles className="w-5 h-5" />,
            color: "from-[#A8D5E2] to-[#C5E8F3]"
        },
        {
            text: "Observa las señales de hambre y saciedad de tu bebé, respetando sus ritmos.",
            icon: <Clock className="w-5 h-5" />,
            color: "from-[#9BC984] to-[#B5D9A1]"
        },
        {
            text: "Evita presionar al bebé para comer más de lo que desea.",
            icon: <Heart className="w-5 h-5" />,
            color: "from-[#E85D75] to-[#F08396]"
        },
        {
            text: "Mantén una actitud positiva durante la alimentación, fomentando una experiencia agradable.",
            icon: <Star className="w-5 h-5" />,
            color: "from-[#FFD93D] to-[#FFE86E]"
        },
        {
            text: "Asegúrate de que el bebé esté cómodo durante las comidas y ofrece pausas si es necesario.",
            icon: <CheckCircle className="w-5 h-5" />,
            color: "from-[#9BC984] to-[#B5D9A1]"
        },
        {
            text: "Incluye alimentos ricos en hierro como carnes, menestras y verduras de hoja verde para prevenir la anemia.",
            icon: <Award className="w-5 h-5" />,
            color: "from-[#A8D5E2] to-[#C5E8F3]"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % videos.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
    };

    return (
        <div className="min-h-screen bg-[#FFF9E6] relative overflow-hidden">
            {/* Formas decorativas infantiles en el fondo */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                {/* Círculos grandes */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-[#A8D5E2] rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFB5C5] rounded-full opacity-25"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-[#FFE5B4] rounded-full opacity-20"></div>
                <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#A8D5E2] rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>

                {/* Estrellas */}
                <div className="absolute top-1/4 right-1/4 text-6xl opacity-10">⭐</div>
                <div className="absolute top-1/3 left-1/3 text-4xl opacity-15">✨</div>
                <div className="absolute bottom-1/3 right-1/4 text-5xl opacity-10">🌟</div>

                {/* Nubes simples */}
                <div className="absolute top-32 right-40 w-20 h-8 bg-white rounded-full opacity-30"></div>
                <div className="absolute top-36 right-44 w-12 h-6 bg-white rounded-full opacity-30"></div>

                {/* Corazones */}
                <div className="absolute top-2/3 left-20 text-5xl opacity-15">💙</div>
                <div className="absolute top-1/2 right-32 text-4xl opacity-10">💛</div>

                {/* Círculos pequeños dispersos */}
                <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#FFB5C5] rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-[#A8D5E2] rounded-full opacity-25"></div>
                <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-[#FFE5B4] rounded-full opacity-30"></div>
            </div>

            {/* Botón de regreso al inicio - fijo arriba */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#FFF9E6] to-[#FFF5D6] shadow-lg backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-white hover:bg-[#A8D5E2] hover:text-white text-gray-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border-2 border-[#A8D5E2] transform hover:scale-105"
                    >
                        <Home className="w-5 h-5" />
                        Volver al inicio
                    </button>
                </div>
            </div>

            {/* Espaciado para el header fijo */}
            <div className="h-20"></div>

            {/* Círculos decorativos superiores - animados - CENTRADOS */}
            <div className="flex justify-center w-full py-4 z-10 relative">
                <div className="flex gap-4 animate-bounce">
                    <div className="w-10 h-10 bg-[#E85D75] rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-[#FFD93D] rounded-full shadow-lg"></div>
                    <div className="w-10 h-10 bg-[#A8D5E2] rounded-full shadow-lg"></div>
                </div>
            </div>

            {/* Hero Section - CENTRADO */}
            <div className="relative px-6 mt-4">
                <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-[#FFF5E0] text-gray-800 py-16 px-6 rounded-3xl shadow-2xl border-4 border-white overflow-hidden">
                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#A8D5E2] rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFB5C5] rounded-full opacity-10 translate-y-1/2 -translate-x-1/2"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-block mb-6 animate-bounce">
                            <div className="bg-gradient-to-br from-[#A8D5E2] to-[#7EC8E3] rounded-full p-4 inline-flex items-center shadow-xl border-4 border-white">
                                <BookOpen className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#E85D75] to-[#A8D5E2] drop-shadow-lg">
                            Aprende con ANMI
                        </h1>
                        <div className="bg-gradient-to-r from-[#A8D5E2] to-[#B8E5F0] rounded-3xl p-6 inline-block shadow-xl border-3 border-white transform hover:scale-105 transition-transform duration-300">
                            <p className="text-xl mb-2 font-bold text-gray-800">✨ Descubre cómo alimentar a tu bebé paso a paso ✨</p>
                            <p className="text-lg text-gray-700">Información oficial y segura para prevenir la anemia 💙</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-3 text-gray-800">
                        ¿Por qué aprender con ANMI?
                    </h2>
                    <p className="text-lg text-gray-600">Beneficios que marcan la diferencia</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredFeature(index)}
                            onMouseLeave={() => setHoveredFeature(null)}
                            className={`${feature.bgColor} rounded-3xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer relative overflow-hidden group border-4 border-white`}
                        >
                            {/* Efecto de brillo al hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>

                            <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center ${feature.textColor} mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                                {feature.icon}
                            </div>

                            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{feature.emoji}</div>

                            <h3 className={`font-black text-xl mb-3 ${feature.textColor}`}>
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Videos Section */}
            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold mb-3 text-gray-800">
                        Etapas de Alimentación
                    </h2>
                    <p className="text-lg text-gray-600">Aprende cada etapa con videos educativos</p>
                </div>

                <div className="relative">
                    <div className={`${videos[currentSlide].bgPattern} rounded-3xl p-8 shadow-2xl border-4 border-white relative overflow-hidden`}>
                        {/* Decoración adicional */}
                        <div className="absolute top-0 right-0 text-6xl opacity-10">✨</div>
                        <div className="absolute bottom-0 left-0 text-5xl opacity-10">🌟</div>

                        <div className="relative z-10">
                            {/* Título y badges */}
                            <div className="flex items-center justify-center gap-3 mb-6">
                                <div className={`bg-gradient-to-br ${videos[currentSlide].gradient} p-4 rounded-2xl ${videos[currentSlide].textColor} shadow-lg border-3 border-white transform hover:rotate-6 transition-transform duration-300`}>
                                    {videos[currentSlide].icon}
                                </div>
                                <div className="text-left">
                                    <h3 className={`text-3xl font-black ${videos[currentSlide].textColor}`}>
                                        {videos[currentSlide].title}
                                    </h3>
                                    <p className="text-lg text-gray-700 font-semibold">{videos[currentSlide].subtitle}</p>
                                </div>
                            </div>

                            <div className="flex justify-center gap-4 mb-8">
                                <div className={`bg-gradient-to-r ${videos[currentSlide].gradient} ${videos[currentSlide].textColor} px-6 py-3 rounded-full font-black text-base shadow-lg border-2 border-white transform hover:scale-105 transition-transform`}>
                                    👶 {videos[currentSlide].edad}
                                </div>
                                <div className={`bg-gradient-to-r ${videos[currentSlide].gradient} ${videos[currentSlide].textColor} px-6 py-3 rounded-full font-black text-base shadow-lg border-2 border-white transform hover:scale-105 transition-transform`}>
                                    🥄 {videos[currentSlide].cantidad}
                                </div>
                            </div>

                            {/* Video y resumen en dos columnas */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Video (2 columnas) */}
                                <div className="lg:col-span-2">
                                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg bg-black border-2 border-white">
                                        <iframe
                                            className="w-full h-full"
                                            src={videos[currentSlide].url}
                                            title={videos[currentSlide].title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>

                                {/* Resumen (1 columna) */}
                                <div className="lg:col-span-1">
                                    <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-[#A8D5E2] h-full transform hover:scale-105 transition-transform duration-300">
                                        <div className="flex items-start gap-3 mb-4">
                                            <div className={`bg-gradient-to-br ${videos[currentSlide].gradient} p-3 rounded-xl ${videos[currentSlide].textColor} flex-shrink-0 shadow-lg`}>
                                                <BookOpen className="w-6 h-6" />
                                            </div>
                                            <h4 className={`text-2xl font-black ${videos[currentSlide].textColor}`}>Resumen</h4>
                                        </div>
                                        <p className="text-base text-gray-800 leading-relaxed font-medium">
                                            {videos[currentSlide].resumen}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-[#A8D5E2] to-[#7EC8E3] text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-3 border-white"
                    >
                        <ChevronLeft className="w-7 h-7" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-[#A8D5E2] to-[#7EC8E3] text-white rounded-full p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-3 border-white"
                    >
                        <ChevronRight className="w-7 h-7" />
                    </button>

                    <div className="flex justify-center gap-3 mt-10">
                        {videos.map((video, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-4 rounded-full transition-all duration-300 shadow-lg border-2 border-white ${
                                    currentSlide === index
                                        ? `w-12 bg-gradient-to-r ${video.gradient}`
                                        : 'w-4 bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Tips Section */}
                <div className="mt-16 relative">
                    <div className="relative bg-gradient-to-br from-white to-[#F0FAFF] rounded-3xl p-10 shadow-2xl border-4 border-[#A8D5E2] overflow-hidden">
                        {/* Decoración */}
                        <div className="absolute top-0 right-0 text-7xl opacity-10">💙</div>
                        <div className="absolute bottom-0 left-0 text-6xl opacity-10">✨</div>

                        <div className="relative z-10">
                            <div className="text-center mb-10">
                                <div className="inline-block mb-4">
                                    <div className="bg-gradient-to-r from-[#E85D75] to-[#FFD93D] text-white text-5xl p-4 rounded-2xl shadow-xl animate-pulse">
                                        💡
                                    </div>
                                </div>
                                <h2 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2B7A9B] to-[#E85D75]">
                                    Tips de Alimentación Responsiva
                                </h2>
                                <p className="text-lg text-gray-700 font-semibold">Consejos esenciales para el éxito ✨</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {tips.map((tip, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setHoveredTip(index)}
                                        onMouseLeave={() => setHoveredTip(null)}
                                        className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer border-3 border-[#A8D5E2] transform hover:-translate-y-1 hover:scale-105"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`bg-gradient-to-br ${tip.color} p-3 rounded-xl text-white flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                                                {tip.icon}
                                            </div>
                                            <div className="flex-1">
                                                <span className="font-black text-2xl mr-2 inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#E85D75] to-[#A8D5E2]">
                                                    {index + 1}.
                                                </span>
                                                <p className="text-base leading-relaxed inline text-gray-800 font-medium">{tip.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AprendeANMIPage;