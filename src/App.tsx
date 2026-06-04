import { useState, useEffect, SVGProps } from 'react';
import { MapPin, Info, Home, BookOpen, Users, Globe, Heart, Phone, Mail, Camera, Share2, ExternalLink, Clock } from 'lucide-react';

const Facebook = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const Instagram = ({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);

// --- DATI PROGRAMMA DI SALA ---
const PROGRAMMA_DATA = [
    {
        id: 'p1',
        title: '🎬 PRIMO TEMPO',
        subtitle: 'La Bottega Fantastica',
        image: '/primotempo.jpeg',
        description: "Liberamente ispirato al celebre balletto di Gioachino Rossini e Ottorino Respighi, La Bottega Fantastica racconta una storia magica e senza tempo ambientata in un negozio di giocattoli molto speciale.\n\nUn giorno arrivano due famiglie con le loro figlie capricciose alla ricerca della bambola perfetta. La bottegaia mostra allora i suoi preziosi automi che, una volta caricati, prendono vita danzando in spettacolari esibizioni ma nessuna di quelle bambole sembra conquistare le due bambine.\n\nRassegnata, la creatrice decide infine di mostrare le sue ultime e più amate creazioni: due splendide ballerine di can-can. Le due bambole si esibiscono in una danza travolgente e piena di energia, tanto da incantare entrambe le famiglie, che desiderano acquistarle immediatamente. Poiché però esiste una sola coppia, la bottegaia decide di separarle e venderne una a ciascuna famiglia.\n\nQuando cala la sera e il negozio chiude, le due ballerine sono disperate all’idea di doversi separare. Ma allo scoccare delle dieci accade la magia: tutte le bambole della bottega prendono vita e, mosse dall’amicizia e dall’affetto, organizzano la fuga delle due ballerine, fingendone la misteriosa scomparsa.\n\nLa mattina seguente il negozio è nel caos: le ballerine non si trovano più e i clienti, convinti di essere stati ingannati, reagiscono con rabbia contro il bottegaio e la sua assistente. Ma proprio nel momento più difficile, tutte le bambole si animano improvvisamente per difendere il loro padrone e scacciare le famiglie infuriate.\n\nTornata la calma, il bottegaio e la sua assistente comprendono finalmente la straordinaria verità: quelle bambole non sono semplici automi, ma creature capaci di amicizia, lealtà e sentimento. Una favola poetica e divertente che celebra il valore dell’unione, della libertà e dell’affetto.",
        choreographies: [
            { title: "1) PRIMI PASSI", courses: "Corsi: Gioco danza, Propedeutico, Accademico 1, 2 e 3", choreographer: "Coreografia di Danila Valentini" },
            { title: "2) LA BOTTEGA FANTASTICA", courses: "Corsi: Gioco danza, Propedeutico, Accademico 1, 2 e 3", choreographer: "Coreografie di Matteo D’Alessio e Danila Valentini" },
        ]
    },
    {
        id: 'p2',
        title: '🎬 SECONDO TEMPO',
        subtitle: 'Dieci Anni',
        image: '/secondotempo.jpeg',
        description: "Ci sono ricordi che non smettono mai di danzare.\n\nQuesto secondo tempo è un viaggio tra emozioni, paure, conquiste e sogni che, anno dopo anno, hanno dato forma alla nostra storia. Ogni coreografia custodisce un frammento di ciò che siamo stati e di ciò che stiamo diventando: le prime timidezze, le sfide affrontate insieme, i sorrisi dietro le quinte, i palchi conquistati con coraggio.\n\nPerché dieci anni non sono soltanto un traguardo, ma il tempo necessario affinché un sogno impari a camminare. E forse, a volare.",
        choreographies: [
            { title: '1) 2017 - ABBRONZATISSIMA', courses: "Corso Gioco danza", choreographer: "Coreografia di Danila Valentini" },
            { title: '2) 2018 – ANNI 90', courses: "Corsi moderno 1 – Hip Hop 2 e 3", choreographer: "Coreografie di Matteo D’Alessio e Andrea Sgarra" },
            { title: '3) 2019 – CINEMUSIC', courses: "Corso Moderno 2", choreographer: "Coreografia di Matteo D’Alessio" },
            { title: '4) 2020 – CE LA FAREMO/ANDRA’ TUTTO BEBE', courses: "Corsi Contemporaneo 2 e 3", choreographer: "Coreografie di Rozenn Corbell" },
            { title: '5) 2021 – THE BLUES BROTHERS', courses: "Corso Moderno 3", choreographer: "Coreografia di Matteo D’Alessio" },
            { title: '6) 2022 - FANTASTICO', courses: "Corsi moderno 1 e 3", choreographer: "Coreografie di Matteo D’Alessio" },
            { title: '7) 2023 - CATS', courses: "Corso Moderno 3", choreographer: "Coreografia di Matteo D’Alessio" },
            { title: '8) 2024 - GREASE', courses: "Corso Moderno 2", choreographer: "Coreografia di Matteo D’Alessio" },
            { title: '9) 2025 - CHICAGO', courses: "Corsi moderno 2 e 3", choreographer: "Coreografia di Matteo D’Alessio" },
            {
                title: '10) 2026 – IL PRIMO PASSO VERSO UN NUOVO CAPITOLO',
                description: "• QUANTO FORTE TI PENSAVO\nCorso Moderno 3\nCoreografia di Manolo Casalino\n\n• SINGING IN THE RAIN\nCorso Burlesque\nCoreografia di Matteo D’Alessio\n\n• QUEEN BAY\nCorsi Hip hop 2 e 3\nCoreografia di Andrea Sgarra"
            },
        ]
    }
];

// --- COMPONENTE FISSO (NON PIU' AD APERTURA) ---
const ChoreographyItem = ({ title, courses, choreographer, description }: any) => (
    <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#D4AF37] mb-5 text-left">
        <div>
            <h4 className="font-bold text-[#1A1A1A] m-0 text-base">{title}</h4>
            <p className="text-[11px] text-gray-500 m-0 uppercase tracking-wide mt-1">{courses}</p>
            {choreographer && <p className="text-[12px] text-[#c8151b] font-bold m-0 italic mt-1">{choreographer}</p>}
        </div>
        {description && (
            <div className="mt-3 pt-3 border-t border-gray-100 whitespace-pre-wrap">
                <p className="text-[13px] text-gray-600 leading-relaxed m-0">{description}</p>
            </div>
        )}
    </div>
);

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
        { page: 2, Icon: Info, label: 'Info' },
        { page: 3, Icon: BookOpen, label: 'Programma' },
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
                        <img src="/curtain-left.png" className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className={`w-1/2 h-full transition-transform duration-[2500ms] ease-in-out z-[101] ${curtainsOpen ? 'translate-x-full' : 'translate-x-0'}`}>
                        <img src="/curtain-right.png" className="w-full h-full object-cover" alt="" />
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
                {currentPage === 2 ? (
                    <div className="animate-fadeIn">
                        <h1 className="text-2xl font-bold uppercase tracking-widest m-0 italic">Saggio 2026</h1>
                    </div>
                ) : (
                    <div className="h-8" />
                )}
            </header>

            <main className="max-w-md mx-auto p-6 text-center">

                {/* PAGE 1 - HOME */}
                {currentPage === 1 && (
                    <div className="animate-fadeIn space-y-10">
                        <img src="/logo.png" className="w-full h-auto mb-8" alt="Logo" />
                        <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                            <p className="italic">Ci sono momenti che si attendono a lungo.</p>
                            <p className="italic">Momenti in cui il cuore batte più forte, le luci si abbassano, il silenzio avvolge la sala… e poi tutto inizia.</p>
                            <p className="font-bold">Questa sera è uno di quei momenti.</p>
                            <p className="italic">È con grande gioia che vi accogliamo al nostro saggio di fine anno: una celebrazione di ogni singolo passo compiuto dalle nostre allieve – dalle più piccole alle più grandi.</p>
                            <p className="italic">Quello che vedrete sul palco è il risultato di mesi di impegno, disciplina, emozioni condivise.</p>
                            <p className="italic">Quando si danza, si cresce. Si scopre sé stessi, si trova il coraggio di brillare davanti agli altri.</p>
                            <p className="font-bold pt-4 text-gray-900">Grazie per essere qui. Buono spettacolo!</p>
                        </div>
                        <div className="py-10 border-y border-gray-200">
                            <h2 className="text-red-600 text-2xl font-bold mb-6 uppercase tracking-wider">Dediche</h2>
                            <div className="space-y-6 italic text-gray-600 text-lg">
                                <p>"A chi ha creduto in sé stesso per la prima volta."</p>
                                <p>"A chi ha scelto di brillare, nonostante la fatica."</p>
                                <p>"A chi ha danzato con il cuore e con l'anima."</p>
                                <p className="font-bold text-red-600 text-xl mt-8 not-italic">Questo saggio è per voi.</p>
                            </div>
                        </div>
                        <div className="pt-4">
                            <p className="font-bold italic text-xl m-0 text-gray-900">Matteo D'Alessio</p>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1 font-semibold">Direzione Artistica – Centro Studi Arti Sceniche</p>
                        </div>
                    </div>
                )}

                {/* PAGE 2 - INFO */}
                {currentPage === 2 && (
                    <div className="animate-fadeIn space-y-8">
                        <div className="leading-relaxed text-center px-2">
                            <p className="text-gray-800 text-base m-0">
                                <span className="font-bold italic">Dieci anni dopo il primo passo</span>
                                <br /><br />
                                è un viaggio tra ricordi, sogni, paure e traguardi che hanno segnato il cammino della nostra scuola.
                                <br /><br />
                                A guidare questo racconto sono Insicurezza, Coraggio e Ambizione: tre voci che accompagnano il pubblico attraverso dieci anni di crescita, emozioni e passione, celebrando non solo le persone che hanno reso possibile questa storia, ma anche tutti quei momenti indimenticabili che hanno lasciato un segno nel cuore della nostra scuola.
                            </p>
                        </div>
                        <img src="/locandina.jpeg" className="w-full rounded-2xl shadow-xl border-4 border-white mb-8" alt="Locandina" />
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                            <div className="flex items-start gap-4 mb-8">
                                <MapPin size={32} className="text-[#c8151b] shrink-0 mt-1" />
                                <div className="flex-1 text-left">
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Teatro San Raffaele</h3>
                                    <p className="text-gray-600 text-sm mt-1">Via di S. Raffaele, 6, 00148 Roma RM</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <button onClick={() => window.open('https://maps.google.com/?q=Teatro+San+Raffaele+Roma')} className="bg-[#c8151b] text-white py-3 rounded-xl font-bold border-none cursor-pointer active:scale-95 transition-all text-center">Apri in Google Maps</button>
                                <button onClick={() => window.open('https://www.teatrosanraffaele.it/')} className="border border-gray-300 py-3 rounded-xl font-bold text-gray-700 bg-white cursor-pointer active:scale-95 transition-all text-center">Sito Ufficiale Teatro</button>
                            </div>
                        </div>
                    </div>
                )}

                {/* PAGE 3 - PROGRAMMA (NON PIU' AD APERTURA) */}
                {currentPage === 3 && (
                    <div className="animate-fadeIn space-y-12">
                        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-widest mb-8">Programma</h2>
                        {PROGRAMMA_DATA.map((section) => (
                            <div key={section.id} className="pb-10 border-b border-gray-200 last:border-0">
                                <h2 className="text-xl font-bold text-[#c8151b] m-0 uppercase">{section.title}</h2>
                                <p className="text-lg font-semibold text-gray-800 mb-6">{section.subtitle}</p>
                                <img src={section.image} className="w-full rounded-xl shadow-md mb-6 aspect-video object-cover" alt="" />
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-sm mb-8 leading-relaxed text-left whitespace-pre-wrap text-gray-600 italic">
                                    {section.description}
                                </div>
                                <div className="space-y-4">
                                    {section.choreographies.map((ch, idx) => (<ChoreographyItem key={idx} {...ch} />))}
                                </div>
                            </div>
                        ))}
                        <div className="mt-12 animate-fadeIn">
                            <Heart size={32} className="text-[#c8151b] mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-[#c8151b] mb-4">Ringraziamenti</h3>
                            <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#D4AF37] text-sm text-gray-700 leading-relaxed">
                                Grazie a tutte le allieve, alle famiglie e a chi ha collaborato dietro le quinte per rendere possibili questi dieci anni di magia.
                            </div>
                        </div>
                    </div>
                )}

                {/* PAGE 4 - CONTATTI E STAFF */}
                {currentPage === 4 && (
                    <div className="animate-fadeIn space-y-10 text-left">
                        <img src="/staff.jpg" className="w-full rounded-2xl shadow-sm object-contain bg-white p-2" alt="Staff" />
                        <div className="section">
                            <div className="flex items-center gap-3 mb-4 text-[#c8151b]">
                                <MapPin size={32} /> <h3 className="text-xl font-bold m-0 text-gray-900">Dove siamo</h3>
                            </div>
                            <button onClick={() => window.open('https://maps.google.com/?q=Via+Mare+di+Bering+42,+Ostia')} className="w-full bg-white p-5 rounded-xl shadow-md border-none cursor-pointer active:scale-95 transition-all text-left">
                                <p className="text-base text-gray-800 m-0 font-semibold">Via Mare di Bering 42, Ostia</p>
                                <p className="text-[#c8151b] font-bold text-sm mt-2 flex items-center gap-1">Apri in Google Maps <ExternalLink size={14} /></p>
                            </button>
                        </div>
                        <div className="section">
                            <div className="flex items-center gap-3 mb-4 text-[#c8151b]">
                                <Phone size={32} /> <h3 className="text-xl font-bold m-0 text-gray-900">Contatti</h3>
                            </div>
                            <button onClick={() => window.open('tel:+393922752576')} className="w-full bg-white p-5 rounded-xl shadow-md border-none mb-3 cursor-pointer text-left">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Telefono:</p>
                                <p className="text-base text-gray-800 m-0 font-semibold">392 2752576</p>
                            </button>
                            <button onClick={() => window.open('mailto:info@centrostudiartisceniche.it')} className="w-full bg-white p-5 rounded-xl shadow-md border-none cursor-pointer text-left">
                                <p className="text-xs font-bold text-gray-400 uppercase mb-1">Email:</p>
                                <p className="text-sm text-gray-800 m-0 font-semibold truncate">info@centrostudiartisceniche.it</p>
                            </button>
                        </div>
                        <div className="section">
                            <div className="flex items-center gap-3 mb-4 text-[#c8151b]">
                                <Globe size={32} /> <h3 className="text-xl font-bold m-0 text-gray-900">Online</h3>
                            </div>
                            <button onClick={() => window.open('https://www.centrostudiartisceniche.it')} className="w-full bg-white p-5 rounded-xl shadow-md border-none mb-3 flex items-center gap-4 cursor-pointer text-left">
                                <Globe size={20} className="text-gray-400" />
                                <div className="flex-1"><p className="text-xs font-bold text-gray-400 uppercase mb-1">Sito Web:</p><p className="text-sm text-gray-800 m-0">www.centrostudiartisceniche.it</p></div>
                                <ExternalLink size={16} className="text-[#c8151b]" />
                            </button>
                            <button onClick={() => window.open('https://instagram.com/centrostudiartisceniche')} className="w-full bg-white p-5 rounded-xl shadow-md border-none mb-3 flex items-center gap-4 cursor-pointer text-left">
                                <Instagram size={20} className="text-gray-400" />
                                <div className="flex-1"><p className="text-xs font-bold text-gray-400 uppercase mb-1">Instagram:</p><p className="text-sm text-gray-800 m-0">@centrostudiartisceniche</p></div>
                                <ExternalLink size={16} className="text-[#c8151b]" />
                            </button>
                            <button onClick={() => window.open('https://facebook.com/centrostudiartisceniche')} className="w-full bg-white p-5 rounded-xl shadow-md border-none flex items-center gap-4 cursor-pointer text-left">
                                <Facebook size={20} className="text-gray-400" />
                                <div className="flex-1"><p className="text-xs font-bold text-gray-400 uppercase mb-1">Facebook:</p><p className="text-sm text-gray-800 m-0">Centro Studi Arti Sceniche</p></div>
                                <ExternalLink size={16} className="text-[#c8151b]" />
                            </button>
                        </div>
                        <div className="section pb-10">
                            <div className="flex items-center gap-3 mb-6 text-[#c8151b]">
                                <Users size={32} /> <h3 className="text-xl font-bold m-0 text-gray-900 uppercase tracking-widest">Staff</h3>
                            </div>
                            <div className="space-y-4">
                                {[
                                    { n: "ROZENN CORBELL", r: "Insegnante corso contemporaneo avanzato e danza adulti" },
                                    { n: "GIORGIA MACRINO", r: "Insegnante corsi di recitazione e musical" },
                                    { n: "PAMELA FADDA", r: "Insegnante corsi di canto" },
                                    { n: "ANDREA SGARRA", r: "Insegnante corsi di hip hop" },
                                    { n: "DANILA VALENTINI", r: "Insegnante corsi di gioco danza" },
                                    { n: "DONATELLA PACE", r: "Assistente e collaboratrice amministrativa" },
                                    { n: "MATTEO D’ALESSIO", r: "Direttore artistico e insegnante corsi di danza" }
                                ].map((m, i) => (
                                    <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-gray-50">
                                        <p className="font-bold text-gray-900 m-0 text-sm uppercase tracking-wide">{m.n}</p>
                                        <p className="text-xs text-gray-500 m-0 mt-1 italic">{m.r}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}