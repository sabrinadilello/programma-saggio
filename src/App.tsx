import { useState, useEffect } from 'react';
import { MapPin, Info, Home, BookOpen, Users, Globe, ChevronDown, ChevronUp, Heart, Phone, Mail, Camera, Share2, ExternalLink, Clock } from 'lucide-react';

// --- DATI PROGRAMMA COMPLETI DAL PDF ---
const PROGRAMMA_DATA = [
    {
        id: 'p1',
        title: '🎬 PRIMO TEMPO',
        subtitle: 'La Bottega Fantastica',
        image: '/primotempo.jpeg',
        description: "Liberamente ispirato al celebre balletto di Rossini e Respighi, racconta una storia magica ambientata in un negozio di giocattoli molto speciale, dove le bambole prendono vita nel cuore della notte.",
        choreographies: [
            { title: "1) PRIMI PASSI", courses: "Gioco danza, Propedeutico, Accademico 1, 2 e 3", choreographer: "Danila Valentini", description: "L'apertura dedicata ai più piccoli della scuola che muovono i loro primi passi." },
            { title: "2) LA BOTTEGA FANTASTICA", courses: "Balletto in un atto", choreographer: "Matteo D’Alessio e Danila Valentini", description: "Le ballerine di can-can e i preziosi automi prendono vita in una danza travolgente." },
        ]
    },
    {
        id: 'p2',
        title: '🎬 SECONDO TEMPO',
        subtitle: 'Dieci Anni',
        image: '/secondotempo.jpeg',
        description: "Un viaggio tra emozioni, paure, conquiste e sogni che, anno dopo anno, hanno dato forma alla nostra storia.",
        choreographies: [
            { title: '2017 - ABBRONZATISSIMA', courses: "Gioco danza", choreographer: "Danila Valentini", description: "" },
            { title: '2018 – ANNI 90', courses: "Moderno 1, Hip Hop 2 e 3", choreographer: "M. D’Alessio e A. Sgarra", description: "" },
            { title: '2019 – CINEMUSIC', courses: "Moderno 2", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2020 – CE LA FAREMO', courses: "Contemporaneo 2 e 3", choreographer: "Rozenn Corbell", description: "" },
            { title: '2021 – THE BLUES BROTHERS', courses: "Moderno 3", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2022 – FANTASTICO', courses: "Moderno 1 e 3", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2023 – CATS', courses: "Moderno 3", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2024 – GREASE', courses: "Moderno 2", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2025 – CHICAGO', courses: "Moderno 2 e 3", choreographer: "Matteo D’Alessio", description: "" },
            { title: '2026 – IL PRIMO PASSO', courses: "Vari Corsi", choreographer: "Casalino, D'Alessio, Sgarra", description: "Il gran finale verso un nuovo capitolo." },
        ]
    }
];

const ChoreographyItem = ({ title, courses, choreographer, description }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div onClick={() => setIsExpanded(!isExpanded)} className="bg-white p-4 rounded-xl shadow-sm border-l-4 border-[#D4AF37] mb-3 cursor-pointer transition-all active:scale-95 text-left">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <h4 className="font-bold text-[#1A1A1A] m-0 text-sm">{title}</h4>
                    <p className="text-[11px] text-gray-500 m-0 uppercase">{courses}</p>
                    {choreographer && <p className="text-[11px] text-[#c8151b] font-semibold m-0 italic">Coreografia: {choreographer}</p>}
                </div>
                {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
            </div>
            {isExpanded && description && <div className="mt-3 pt-3 border-t border-gray-100 animate-fadeIn"><p className="text-xs text-gray-600 leading-relaxed">{description}</p></div>}
        </div>
    );
};

export default function App() {
    const [currentPage, setCurrentPage] = useState(1);
    const [curtainsOpen, setCurtainsOpen] = useState(false);
    const [animationFinished, setAnimationFinished] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (currentPage === 1) {
            setAnimationFinished(false);
            setCurtainsOpen(false);
            setTimeout(() => setCurtainsOpen(true), 500);
            setTimeout(() => setAnimationFinished(true), 3000);
        } else {
            setAnimationFinished(true);
        }
    }, [currentPage]);

    const navItems = [
        { page: 1, Icon: Home, label: 'Home' },
        { page: 2, Icon: BookOpen, label: 'Programma' },
        { page: 3, Icon: Users, label: 'Staff' },
        { page: 4, Icon: Phone, label: 'Contatti' },
    ];

    return (
        <div className="min-h-screen bg-[#F8F8F8] text-[#1A1A1A] pb-24 font-sans overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                body { font-family: 'Inter', sans-serif; margin: 0; background-color: #F8F8F8; }
                .header-gradient { background: linear-gradient(to bottom, #1A1A1A 0%, #c8151b 100%); }
                .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>

            {/* SIPARIO */}
            {!animationFinished && currentPage === 1 && (
                <div className="fixed inset-0 z-[100] pointer-events-none flex overflow-hidden">
                    <div className={`w-1/2 h-full transition-transform duration-[2500ms] ease-in-out z-[101] ${curtainsOpen ? '-translate-x-full' : 'translate-x-0'}`}>
                        <img src="/curtain-left.png" className="w-full h-full object-cover" />
                    </div>
                    <div className={`w-1/2 h-full transition-transform duration-[2500ms] ease-in-out z-[101] ${curtainsOpen ? 'translate-x-full' : 'translate-x-0'}`}>
                        <img src="/curtain-right.png" className="w-full h-full object-cover" />
                    </div>
                </div>
            )}

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

            <header className="header-gradient text-white pt-12 pb-8 px-6 text-center shadow-md">
                <h1 className="text-2xl font-bold uppercase tracking-widest m-0 italic">Saggio 2026</h1>
                <p className="text-sm opacity-80 mt-1">Dieci anni dopo il primo passo</p>
            </header>

            <main className="max-w-md mx-auto p-6 text-center">

                {/* PAGE 1 - HOME */}
                {currentPage === 1 && (
                    <div className="animate-fadeIn space-y-12">
                        <img src="/logo.png" className="w-48 mx-auto mb-8" alt="Logo" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-base italic">
                            <p>Ci sono momenti che si attendono a lungo.</p>
                            <p>Momenti in cui il cuore batte più forte, le luci si abbassano, il silenzio avvolge la sala… e poi tutto inizia.</p>
                            <p><strong>Questa sera è uno di quei momenti.</strong></p>
                            <p>È con grande gioia che vi accogliamo al nostro saggio di fine anno: una celebrazione di ogni singolo passo compiuto dalle nostre allieve.</p>
                            <p>Quando si danza, si cresce. Si scopre sé stessi, si trova il coraggio di brillare davanti agli altri.</p>
                            <p className="font-bold text-[#c8151b] not-italic text-lg pt-4">Grazie per essere qui. Buon spettacolo!</p>
                        </div>
                        <div className="py-10 border-y border-gray-200">
                            <h2 className="text-[#c8151b] text-2xl font-bold mb-6">Dediche</h2>
                            <div className="space-y-4 italic text-gray-600">
                                <p>"A chi ha creduto in sé stesso per la prima volta."</p>
                                <p>"A chi ha scelto di brillare, nonostante la fatica."</p>
                                <p>"A chi ha danzato con il cuore e con l'anima."</p>
                                <p className="font-bold text-[#c8151b] text-lg mt-6 not-italic">Questo saggio è per voi.</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="font-bold italic text-xl m-0">Matteo D'Alessio</p>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Direzione Artistica – Centro Studi Arti Sceniche</p>
                        </div>
                        <img src="/locandina.jpeg" className="w-full rounded-2xl shadow-xl border-4 border-white mt-10" alt="Locandina" />
                    </div>
                )}

                {/* PAGE 2 - PROGRAMMA */}
                {currentPage === 2 && (
                    <div className="animate-fadeIn space-y-10">
                        {PROGRAMMA_DATA.map((section) => (
                            <div key={section.id}>
                                <h2 className="text-xl font-bold text-[#c8151b] m-0 uppercase">{section.title}</h2>
                                <p className="text-lg font-semibold text-gray-800 mb-6">{section.subtitle}</p>
                                <img src={section.image} className="w-full rounded-xl shadow-md mb-6 aspect-video object-cover" />
                                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 text-sm mb-6 leading-relaxed">{section.description}</div>
                                <div className="space-y-3">
                                    {section.choreographies.map((ch, idx) => (<ChoreographyItem key={idx} {...ch} />))}
                                </div>
                            </div>
                        ))}
                        <div className="mt-12 animate-fadeIn">
                            <Heart size={32} className="text-[#c8151b] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#c8151b] mb-4">Ringraziamenti</h3>
                            <div className="bg-white p-6 rounded-2xl shadow-md border-2 border-[#D4AF37] text-sm leading-relaxed text-gray-700">
                                Un grazie sentito a tutte le allieve, alle famiglie e a chi ha collaborato dietro le quinte.
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
                            { n: "PAMELA FADDA", r: "Canto" },
                            { n: "ANDREA SGARRA", r: "Hip Hop" },
                            { n: "DANILA VALENTINI", r: "Gioco Danza" },
                            { n: "DONATELLA VERONICA", r: "Amministrazione" }
                        ].map((m, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl shadow-sm flex items-center justify-between text-left">
                                <div>
                                    <p className="font-bold m-0 text-sm">{m.n}</p>
                                    <p className="text-[10px] text-gray-400 m-0 uppercase tracking-widest">{m.r}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* PAGE 4 - CONTATTI */}
                {currentPage === 4 && (
                    <div className="animate-fadeIn space-y-8">
                        <img src="/staff.jpg" className="w-full rounded-2xl shadow-sm object-contain bg-white p-2" alt="Staff" />
                        <div className="text-left space-y-8">
                            <div className="flex items-center gap-2 mb-4 text-[#c8151b]">
                                <MapPin size={28} /> <h3 className="text-xl font-bold m-0 text-gray-900">Dove siamo</h3>
                            </div>
                            <button onClick={() => window.open('https://maps.google.com/?q=Via+Mare+di+Bering+42,+Ostia')} className="w-full bg-white p-5 rounded-2xl shadow-sm border-none flex items-center gap-4 text-left cursor-pointer active:scale-95 transition-all">
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800 m-0">Via Mare di Bering 42, Ostia</p>
                                    <p className="text-[#c8151b] text-sm font-bold mt-2 italic">👉 Apri in Google Maps</p>
                                </div>
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}