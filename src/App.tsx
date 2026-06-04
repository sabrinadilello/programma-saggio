import { useState, useEffect } from 'react';
import { MapPin, Info, Home, BookOpen, Users, Globe, ChevronDown, ChevronUp, Heart, Clock } from 'lucide-react';

// --- DATI DEL SAGGIO 2026 ---
const PROGRAMMA_DATA = [
    {
        id: 'p1',
        title: '🎬 PRIMO TEMPO',
        subtitle: 'La Bottega Fantastica',
        image: '/primotempo.jpeg', // Carica questa immagine nella cartella public
        description: "Liberamente ispirato al celebre balletto di Rossini e Respighi, racconta una storia magica ambientata in un negozio di giocattoli molto speciale, dove le bambole prendono vita nel cuore della notte.",
        choreographies: [
            { title: "1) PRIMI PASSI", courses: "Gioco danza, Propedeutico, Accademico 1, 2 e 3", choreographer: "Danila Valentini", description: "L'apertura dedicata ai più piccoli della scuola che muovono i loro primi passi nel mondo della danza." },
            { title: "2) LA BOTTEGA FANTASTICA", courses: "Balletto in un atto", choreographer: "Matteo D’Alessio e Danila Valentini", description: "Due splendide ballerine di can-can e i preziosi automi della bottega prendono vita in una danza travolgente e piena di energia." },
        ]
    },
    {
        id: 'p2',
        title: '🎬 SECONDO TEMPO',
        subtitle: 'Dieci Anni',
        image: '/secondotempo.jpeg', // Carica questa immagine nella cartella public
        description: "Un viaggio tra emozioni, paure, conquiste e sogni che, anno dopo anno, hanno dato forma alla nostra storia. Ogni coreografia custodisce un frammento di ciò che siamo stati e di ciò che stiamo diventando.",
        choreographies: [
            { title: '2017 - ABBRONZATISSIMA', courses: "Corso Gioco danza", choreographer: "Danila Valentini", description: "L'inizio del nostro viaggio, il primo palco." },
            { title: '2018 – ANNI 90', courses: "Moderno 1 – Hip Hop 2 e 3", choreographer: "Matteo D’Alessio e Andrea Sgarra", description: "Ritmo e grinta per celebrare il secondo anno." },
            { title: '2019 – CINEMUSIC', courses: "Corso Moderno 2", choreographer: "Matteo D’Alessio", description: "Le più grandi colonne sonore del cinema." },
            { title: '2020 – CE LA FAREMO', courses: "Corsi Contemporaneo 2 e 3", choreographer: "Rozenn Corbell", description: "Un messaggio di speranza attraverso il movimento." },
            { title: '2021 – THE BLUES BROTHERS', courses: "Corso Moderno 3", choreographer: "Matteo D’Alessio", description: "Energia pura a ritmo di blues." },
            { title: '2026 – NUOVO CAPITOLO', courses: "Vari Corsi", choreographer: "Casalino, D'Alessio, Sgarra", description: "Il gran finale che celebra dieci anni di danza e amicizia." },
        ]
    }
];

// --- COMPONENTE ACCORDION (Logica identica all'originale) ---
const ChoreographyItem = ({ title, courses, choreographer, description }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#D4AF37] mb-3 cursor-pointer transition-all active:scale-95"
        >
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <h4 className="font-bold text-[#1A1A1A] m-0 text-sm">{title}</h4>
                    <p className="text-[11px] text-gray-500 m-0 uppercase tracking-tight">{courses}</p>
                    <p className="text-[11px] text-[#c8151b] font-semibold m-0 italic">Coreografia: {choreographer}</p>
                </div>
                {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
            </div>
            {isExpanded && (
                <div className="mt-3 pt-3 border-t border-gray-100 animate-fadeIn">
                    <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
                </div>
            )}
        </div>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [currentPage]);

    const navItems = [
        { page: 1, Icon: Home, label: 'Home' },
        { page: 2, Icon: BookOpen, label: 'Programma' },
        { page: 3, Icon: Users, label: 'Staff' },
        { page: 4, Icon: Info, label: 'Info' },
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

            {/* NAVIGATION BAR */}
            <nav className="fixed inset-x-0 bottom-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
                <div className="flex justify-around items-center py-3">
                    {navItems.map((item) => (
                        <button key={item.page} onClick={() => setCurrentPage(item.page)}
                            className={`flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer transition-all ${currentPage === item.page ? 'text-[#c8151b]' : 'text-gray-400'}`}>
                            <item.Icon size={24} />
                            <span className="text-[10px] uppercase font-bold tracking-tighter">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* HEADER */}
            <header className="header-gradient text-white pt-12 pb-8 px-6 text-center shadow-md">
                <Clock size={40} className="mx-auto text-[#D4AF37] mb-2" />
                <h1 className="text-2xl font-bold uppercase tracking-widest m-0">Programma di Sala</h1>
                <p className="text-sm opacity-80 mt-1 italic">Saggio Spettacolo 2026</p>
            </header>

            <main className="max-w-md mx-auto p-6">

                {/* PAGE 1 - HOME */}
                {currentPage === 1 && (
                    <div className="animate-fadeIn">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 italic text-center mb-8 leading-relaxed text-gray-700">
                            "<strong>Dieci anni dopo il primo passo</strong> è un viaggio tra ricordi, sogni e traguardi. A guidare questo racconto sono Insicurezza, Coraggio e Ambizione..."
                        </div>
                        <img src="/locandina.jpeg" className="w-full rounded-2xl shadow-xl border-4 border-white" alt="Locandina" />
                    </div>
                )}

                {/* PAGE 2 - PROGRAMMA (STESSA LOGICA DEL VECCHIO) */}
                {currentPage === 2 && (
                    <div className="animate-fadeIn space-y-10">
                        {PROGRAMMA_DATA.map((section) => (
                            <div key={section.id}>
                                <div className="text-center mb-6">
                                    <h2 className="text-xl font-bold text-[#c8151b] m-0 uppercase">{section.title}</h2>
                                    <p className="text-lg font-semibold text-gray-800 m-0">{section.subtitle}</p>
                                </div>

                                <img src={section.image} className="w-full rounded-xl shadow-md mb-6 aspect-video object-cover" />

                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-sm text-center mb-6 leading-relaxed">
                                    {section.description}
                                </div>

                                <div className="space-y-3">
                                    {section.choreographies.map((ch, idx) => (
                                        <ChoreographyItem key={idx} {...ch} />
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* RINGRAZIAMENTI (STESSO LOOK DEL VECCHIO) */}
                        <div className="mt-12 text-center animate-fadeIn">
                            <Heart size={32} className="text-[#c8151b] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#c8151b] mb-4">Ringraziamenti Speciali</h3>
                            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-[#D4AF37] text-sm leading-relaxed text-gray-700">
                                Un grazie sentito a tutte le allieve, alle famiglie e a chi ha collaborato dietro le quinte per rendere possibile questi dieci anni di magia.
                            </div>
                        </div>
                    </div>
                )}

                {/* PAGE 3 - STAFF */}
                {currentPage === 3 && (
                    <div className="animate-fadeIn space-y-3">
                        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Lo Staff</h2>
                        {[
                            { n: "MATTEO D’ALESSIO", r: "Direttore artistico" },
                            { n: "ROZENN CORBELL", r: "Danza contemporanea" },
                            { n: "GIORGIA MACRINO", r: "Recitazione" },
                            { n: "ANDREA SGARRA", r: "Hip Hop" },
                            { n: "DANILA VALENTINI", r: "Gioco Danza" },
                        ].map((m, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between">
                                <div className="text-left">
                                    <p className="font-bold m-0">{m.n}</p>
                                    <p className="text-[10px] text-gray-400 m-0 uppercase tracking-widest">{m.r}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* PAGE 4 - TEATRO */}
                {currentPage === 4 && (
                    <div className="animate-fadeIn space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-center">Info e Teatro</h2>
                        <div className="bg-white p-8 rounded-2xl shadow-md space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-[#c8151b] m-0">Teatro San Raffaele</h3>
                                <p className="text-gray-600 mt-2">Via di S. Raffaele, 6, 00148 Roma RM</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <a href="https://maps.google.com/?q=Teatro+San+Raffaele+Roma" target="_blank" className="bg-[#c8151b] text-white py-4 rounded-xl font-bold text-center no-underline">Apri Mappe</a>
                                <a href="https://www.teatrosanraffaele.it/" target="_blank" className="border border-gray-300 py-4 rounded-xl font-bold text-gray-700 text-center no-underline">Sito Ufficiale</a>
                            </div>
                        </div>
                    </div>
                )}

            </main>
        </div>
    );
}