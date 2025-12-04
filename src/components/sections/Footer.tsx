export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-200 py-16 relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Grid principal */}
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Columna 1: Info y Logo */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-black text-2xl">A</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">ANMI</h3>
                                <p className="text-xs text-slate-400">Prevención de Anemia Infantil</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-md">
                            Asistente educativo para la prevención de anemia infantil, con información clara, responsable y basada en fuentes oficiales.
                        </p>

                        {/* Badges de fuentes */}
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                                🏥 MINSA
                            </span>
                            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                                🌍 OMS/OPS
                            </span>
                            <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs text-slate-300">
                                🎓 UNMSM
                            </span>
                        </div>
                    </div>

                    {/* Columna 2: Enlaces */}
                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                            Enlaces
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#conocenos"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                                    Sobre ANMI
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#importancia"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                                    Importancia
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#funcionalidades"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                                    Funcionalidades
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#fuentes"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-blue-500 transition-colors"></span>
                                    Fuentes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Legal */}
                    <div>
                        <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                            <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Aviso de privacidad
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Disclaimer médico
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Términos de uso
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-purple-500 transition-colors"></span>
                                    Ley 29733
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separador decorativo */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

                {/* Sección de compromiso */}
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                <span className="text-emerald-400 text-xl">✓</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">Proyecto sin ánimo de lucro</p>
                                <p className="text-slate-400 text-xs">Comprometidos con la salud infantil</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                                <span className="text-blue-400 text-xl">🔒</span>
                            </div>
                            <div>
                                <p className="text-white font-semibold text-sm">100% privado y seguro</p>
                                <p className="text-slate-400 text-xs">No guardamos tu información</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom - Copyright */}
                <div className="text-center space-y-3">
                    <p className="text-xs text-slate-400">
                        © 2025 ANMI - Prevención de Anemia Infantil. Proyecto académico UNMSM.
                    </p>
                    <p className="text-xs text-slate-500">
                        Contenido basado en guías del MINSA, OMS y OPS. Adaptado con fines educativos.
                    </p>
                    <p className="text-xs text-slate-600">
                        Desarrollado en el marco del curso de Ética y Derecho Informático.
                    </p>
                </div>
            </div>
        </footer>
    );
}