// src/components/Footer.tsx

// NOTA: Este componente no necesita imports de Button, Card, ni iconos.

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-slate-800">
                    {/* Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/logo-blanco.svg"
                                alt="ANMI Logo"
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-sm text-slate-300">
                            Asistente educativo para la prevención de anemia infantil, con
                            información clara y responsable.
                        </p>
                    </div>


                    {/* Enlaces */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-sm">
                            {/* NOTA: Estos 'href' deben apuntar a los IDs de tus nuevas secciones */}
                            <li>
                                <a href="#conocenos" className="hover:text-sky-200 transition-colors">
                                    Sobre ANMI
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-sky-200 transition-colors">
                                    Preguntas frecuentes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-sky-200 transition-colors">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-sky-200 transition-colors">
                                    Aviso de privacidad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-sky-200 transition-colors">
                                    Disclaimer médico
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-sky-200 transition-colors">
                                    Términos de uso
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="text-center text-xs text-slate-500 border-t border-slate-800 pt-8">
                    <p>
                        © 2025 ANMI - Prevención de Anemia Infantil. Todos los derechos
                        reservados.
                    </p>
                    <p className="mt-2">
                        Contenido basado en guías del MINSA, OMS y OPS y adaptado con
                        fines educativos.
                    </p>
                </div>
            </div>
        </footer>
    );
}