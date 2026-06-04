import { useState, useEffect } from 'react';
import { MapPin, Info, Home, BookOpen, Users, Globe, ChevronDown } from 'lucide-react';

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [openSection, setOpenSection] = useState<string | null>(null);

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

            <nav className="fixed inset-x-0 bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <div className="flex justify-around items-center py-3">
                    {navItems.map((item) => (
                        <button key={item.page} onClick={() => { setCurrentPage(item.page); setOpenSection(null); }}
                            className={`flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer transition-all ${currentPage === item.page ? 'text-[#c8151b]' : 'text-gray-400'}`}>
                            <item.Icon size={24} />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            <header className="header-gradient text-white pt-12 pb-8 px-6 text-center shadow-md">
                <h1 className="text-2xl font-bold uppercase tracking-widest m-0">Saggio 2026</h1>
                <p className="text-sm opacity-80 mt-2 italic">Dieci anni dopo il primo passo</p>
            </header>

            <main className="max-w-md mx-auto p-6">

                {/* PAGE 1 - HOME */}
                {currentPage === 1 && (
                    <div className="animate-fadeIn">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-center mb-8 leading-relaxed text-gray-700">
                            "<strong>Dieci anni dopo il primo passo</strong> è un viaggio tra ricordi, sogni, paure e traguardi che hanno segnato il cammino della nostra scuola..."
                        </div>
                        <img src="/locandina.jpeg" className="w-full rounded-2xl shadow-xl border-4 border-white mb-8" alt="Locandina"
                            onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/400x600?text=Locandina' }} />
                    </div>
                )}

                {/* PAGE 2 - PROGRAMMA COMPLETO */}
                {currentPage === 2 && (
                    <div className="animate-fadeIn space-y-4">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Programma di Sala</h2>

                        {/* PRIMO TEMPO */}
                        <div className="bg-white rounded-xl shadow-sm border-l-4 border-[#c8151b] overflow-hidden">
                            <button onClick={() => setOpenSection(openSection === 'p1' ? null : 'p1')} className="w-full p-5 text-left bg-transparent border-none flex justify-between items-center cursor-pointer">
                                <div>
                                    <h3 className="font-bold text-[#c8151b] uppercase m-0 text-lg">Primo Tempo</h3>
                                    <p className="text-sm text-gray-600 m-0">La Bottega Fantastica</p>
                                </div>
                                <ChevronDown size={20} className={`transition-transform ${openSection === 'p1' ? 'rotate-180' : ''}`} />
                            </button>
                            {openSection === 'p1' && (
                                <div className="p-5 pt-0 text-sm space-y-4 border-t border-gray-50">
                                    <p className="text-gray-600 italic">Liberamente ispirato al celebre balletto di Rossini e Respighi...</p>
                                    <div>
                                        <p className="font-bold text-gray-800 m-0">1) PRIMI PASSI</p>
                                        <p className="text-gray-500 text-xs">Corsi: Gioco danza, Propedeutico, Accademico 1, 2 e 3</p>
                                        <p className="text-gray-400 text-xs italic">Coreografie: Danila Valentini</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800 m-0">2) LA BOTTEGA FANTASTICA</p>
                                        <p className="text-gray-500 text-xs">Balletto in un atto</p>
                                        <p className="text-gray-400 text-xs italic">Coreografie: Matteo D’Alessio e Danila Valentini</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SECONDO TEMPO */}
                        <div className="bg-white rounded-xl shadow-sm border-l-4 border-gray-400 overflow-hidden">
                            <button onClick={() => setOpenSection(openSection === 'p2' ? null : 'p2')} className="w-full p-5 text-left bg-transparent border-none flex justify-between items-center cursor-pointer">
                                <div>
                                    <h3 className="font-bold text-gray-800 uppercase m-0 text-lg">Secondo Tempo</h3>
                                    <p className="text-sm text-gray-600 m-0">Dieci Anni</p>
                                </div>
                                <ChevronDown size={20} className={`transition-transform ${openSection === 'p2' ? 'rotate-180' : ''}`} />
                            </button>
                            {openSection === 'p2' && (
                                <div className="p-5 pt-0 text-sm space-y-3 border-t border-gray-50">
                                    {[
                                        { a: "2017", t: "ABBRONZATISSIMA", c: "Gioco Danza" },
                                        { a: "2018", t: "ANNI 90", c: "Moderno 1, Hip Hop 2 e 3" },
                                        { a: "2019", t: "CINEMUSIC", c: "Moderno 2" },
                                        { a: "2020", t: "CE LA FAREMO", c: "Contemporaneo 2 e 3" },
                                        { a: "2021", t: "THE BLUES BROTHERS", c: "Moderno 3" },
                                        { a: "2022", t: "FANTASTICO", c: "Moderno 1 e 3" },
                                        { a: "2023", t: "CATS", c: "Moderno 3" },
                                        { a: "2024", t: "GREASE", c: "Moderno 2" },
                                        { a: "2025", t: "CHICAGO", c: "Moderno 2 e 3" },
                                        { a: "2026", t: "IL PRIMO PASSO", c: "Vari Corsi" }
                                    ].map((item, i) => (
                                        <div key={i} className="border-b border-gray-50 pb-2">
                                            <p className="font-bold m-0 text-[#c8151b] text-xs">{item.a}</p>
                                            <p className="font-semibold m-0">{item.t}</p>
                                            <p className="text-[10px] text-gray-400 m-0 uppercase">{item.c}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* PAGE 3 - STAFF COMPLETO */}
                {currentPage === 3 && (
                    <div className="animate-fadeIn space-y-3">
                        <h2 className="text-2xl font-bold mb-6 text-center">Lo Staff</h2>
                        {[
                            { n: "MATTEO D’ALESSIO", r: "Direttore artistico e insegnante" },
                            { n: "ROZENN CORBELL", r: "Danza contemporanea e adulti" },
                            { n: "GIORGIA MACRINO", r: "Recitazione e Musical" },
                            { n: "PAMELA FADDA", r: "Canto" },
                            { n: "ANDREA SGARRA", r: "Hip Hop" },
                            { n: "DANILA VALENTINI", r: "Gioco Danza" },
                            { n: "DONATELLA VERONICA", r: "Assistente amministrativa" }
                        ].map((m, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex justify-between items-center">
                                <div className="text-left">
                                    <p className="font-bold m-0 text-sm">{m.n}</p>
                                    <p className="text-[10px] text-gray-400 m-0 uppercase tracking-wider">{m.r}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* PAGE 4 - TEATRO */}
                {currentPage === 4 && (
                    <div className="animate-fadeIn space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-center">Il Teatro</h2>
                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#c8151b] m-0">Teatro San Raffaele</h3>
                                <p className="text-gray-600 mt-1">Via di S. Raffaele, 6, 00148 Roma RM</p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <a href="https://maps.google.com/?q=Teatro+San+Raffaele+Roma" target="_blank" className="bg-[#c8151b] text-white py-4 rounded-xl font-bold text-center no-underline shadow-lg shadow-red-100">Apri Mappe</a>
                                <a href="https://www.teatrosanraffaele.it/" target="_blank" className="border border-gray-300 py-4 rounded-xl font-bold text-gray-700 text-center no-underline">Sito Ufficiale</a>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;