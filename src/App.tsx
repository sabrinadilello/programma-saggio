import { useState, useEffect } from 'react';
import { MapPin, Info, Home, BookOpen, Users, Globe, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [openSection, setOpenSection] = useState<string | null>(null);

    // Torna in alto al cambio pagina
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    const navItems = [
        { page: 1, Icon: Home, label: 'Home' },
        { page: 2, Icon: BookOpen, label: 'Programma' },
        { page: 3, Icon: Users, label: 'Staff' },
        { page: 4, Icon: Info, label: 'Teatro' },
    ];

    return (
        <div className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A] pb-24 font-sans">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; margin: 0; background-color: #F8F8F8; }
        .header-gradient { background: linear-gradient(to bottom, #1A1A1A 0%, #c8151b 100%); }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

            {/* NAV BAR ORIGINALE (BOTTOM) */}
            <nav className="fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <div className="flex justify-around items-center py-3">
                    {navItems.map((item) => (
                        <button
                            key={item.page}
                            onClick={() => { setCurrentPage(item.page); setOpenSection(null); }}
                            className={`flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer transition-all ${currentPage === item.page ? 'text-[#c8151b]' : 'text-gray-400'}`}
                        >
                            <item.Icon size={24} />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* HEADER ORIGINALE (ROSSO/NERO) */}
            <header className="header-gradient text-white pt-12 pb-8 px-6 text-center shadow-md">
                <h1 className="text-2xl font-bold uppercase tracking-widest m-0">Saggio 2026</h1>
                <p className="text-sm opacity-80 mt-2 italic">Dieci anni dopo il primo passo</p>
            </header>

            <main className="max-w-md mx-auto p-6">

                {/* PAGE 1 - HOME */}
                {currentPage === 1 && (
                    <div className="animate-fadeIn">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-center mb-8 leading-relaxed text-gray-700">
                            "<strong>Dieci anni dopo il primo passo</strong> è un viaggio tra ricordi, sogni, paure e traguardi che hanno segnato il cammino della nostra scuola. A guidare questo racconto sono Insicurezza, Coraggio e Ambizione..."
                        </div>
                        <img
                            src="/locandina.jpeg"
                            alt="Locandina"
                            className="w-full rounded-2xl shadow-xl border-4 border-white mb-8"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/400x600?text=Locandina' }}
                        />
                    </div>
                )}

                {/* PAGE 2 - PROGRAMMA DI SALA */}
                {currentPage === 2 && (
                    <div className="animate-fadeIn space-y-4">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Programma di Sala</h2>

                        {/* PRIMO TEMPO */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#c8151b]">
                            <h3 className="font-bold text-[#c8151b] uppercase m-0">Primo Tempo</h3>
                            <p className="text-sm text-gray-600 m-0">La Bottega Fantastica</p>
                            <div className="mt-4 text-xs space-y-3 opacity-90 border-t border-gray-50 pt-4">
                                <p><strong>1) PRIMI PASSI</strong><br />Corsi: Gioco danza, Propedeutico, Accademico 1, 2 e 3<br /><span className="text-gray-400 italic">Coreografie: Danila Valentini</span></p>
                                <p><strong>2) LA BOTTEGA FANTASTICA</strong><br />Balletto in un atto<br /><span className="text-gray-400 italic">Coreografie: Matteo D’Alessio e Danila Valentini</span></p>
                            </div>
                        </div>

                        {/* SECONDO TEMPO */}
                        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-gray-400">
                            <h3 className="font-bold text-gray-800 uppercase m-0">Secondo Tempo</h3>
                            <p className="text-sm text-gray-600 m-0">Dieci Anni</p>
                            <div className="mt-4 space-y-2 opacity-80">
                                {['2017 - Abbronzatissima', '2018 - Anni 90', '2019 - Cinemuseic', '2020 - Ce la faremo', '2021 - The Blues Brothers', '2022 - Fantastico', '2023 - Cats', '2024 - Grease', '2025 - Chicago', '2026 - Il primo passo'].map(item => (
                                    <div key={item} className="text-xs border-b border-gray-50 pb-1">{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* PAGE 3 - STAFF */}
                {currentPage === 3 && (
                    <div className="animate-fadeIn space-y-3">
                        <h2 className="text-2xl font-bold mb-6 text-center">Lo Staff</h2>
                        {[
                            { n: "Matteo D'Alessio", r: "Direttore Artistico" },
                            { n: "Rozenn Corbell", r: "Contemporaneo e Adulti" },
                            { n: "Giorgia Macrino", r: "Musical e Recitazione" },
                            { n: "Andrea Sgarra", r: "Hip Hop" },
                            { n: "Danila Valentini", r: "Gioco Danza" },
                            { n: "Pamela Fadda", r: "Canto" },
                            { n: "Donatella Veronica", r: "Amministrazione" }
                        ].map((m, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">
                                <h4 className="font-bold m-0 text-sm">{m.n}</h4>
                                <p className="text-[10px] text-gray-400 m-0 uppercase tracking-widest">{m.r}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* PAGE 4 - TEATRO */}
                {currentPage === 4 && (
                    <div className="animate-fadeIn">
                        <h2 className="text-2xl font-bold mb-6 text-center">Il Teatro</h2>
                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#c8151b] m-0">Teatro San Raffaele</h3>
                                <p className="text-gray-600 mt-1">Via di S. Raffaele, 6, 00148 Roma RM</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://maps.google.com/?q=Teatro+San+Raffaele+Roma"
                                    target="_blank"
                                    className="bg-[#c8151b] text-white py-4 rounded-xl font-bold text-center no-underline shadow-lg shadow-red-100"
                                >
                                    <MapPin size={18} className="inline mr-2" /> Apri Mappe
                                </a>
                                <a
                                    href="https://www.teatrosanraffaele.it/"
                                    target="_blank"
                                    className="border border-gray-300 py-4 rounded-xl font-bold text-gray-700 text-center no-underline"
                                >
                                    <Globe size={18} className="inline mr-2" /> Sito Ufficiale
                                </a>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}

export default App;