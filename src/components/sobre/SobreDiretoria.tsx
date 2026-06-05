import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const directors = [
  {
    id: 1,
    name: "Marcus Cordeiro",
    role: "Founder & CEO",
    quote: "A inovação contábil não é sobre números, é sobre prever o futuro do varejo farmacêutico e agir agora.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    social: "LinkedIn"
  },
  {
    id: 2,
    name: "Sérgio Vianna",
    role: "CFO",
    quote: "Nossa inteligência financeira é desenhada para blindar sua margem de lucro em um mercado extremamente competitivo.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
    social: "LinkedIn"
  },
  {
    id: 3,
    name: "Ana Silva",
    role: "Diretora de Operações",
    quote: "Processos bem definidos são a ponte entre o planejamento tributário e o dinheiro efetivo no caixa.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    social: "LinkedIn"
  },
  {
    id: 4,
    name: "Roberto Santos",
    role: "Head de Inovação",
    quote: "Automatizar a rotina fiscal é devolver tempo para o dono da farmácia focar na experiência do cliente.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    social: "LinkedIn"
  },
  {
    id: 5,
    name: "Carolina Costa",
    role: "Head Jurídico",
    quote: "Segurança jurídica é a base para o crescimento sustentável de qualquer grupo farmacêutico no Brasil.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    social: "LinkedIn"
  }
];

const SobreDiretoria = () => {
  const [activeDir, setActiveDir] = useState(directors[0]);

  return (
    <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-white">
      <div className="container mx-auto px-5 md:px-10 xl:px-16">
        <div className="h-[65vh] min-h-[500px] w-full relative bg-slate-900 rounded-3xl overflow-hidden text-white flex flex-col justify-between">
      {/* Background Image Transitions */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img 
            key={activeDir.id}
            src={activeDir.image}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover origin-top"
          />
        </AnimatePresence>
        {/* Soft overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full px-6 md:px-12 py-10 md:py-12 flex flex-col justify-between pointer-events-none">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pointer-events-auto">
          {/* Main Statement */}
          <div className="w-full md:w-[45%] lg:w-[35%]">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight md:leading-snug">
              As mentes que constroem o futuro do varejo farmacêutico.
            </h2>
          </div>

          {/* Changing Quote */}
          <div className="w-full md:w-[30%] lg:w-[25%] md:text-right md:pt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeDir.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-base md:text-lg font-light text-white/90 leading-relaxed"
              >
                "{activeDir.quote}"
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:gap-8 pointer-events-auto">
          
          {/* Thumbnails */}
          <div className="flex items-end gap-3 md:gap-4 h-24">
            {directors.map((dir) => (
              <div key={dir.id} className="relative flex flex-col items-center gap-2">
                {/* Active Indicator Dot */}
                <div className="h-2 w-2 flex items-center justify-center">
                  {activeDir.id === dir.id && (
                    <motion.div layoutId="active-dot" className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
                
                {/* Thumb Button */}
                <button 
                  onMouseEnter={() => setActiveDir(dir)}
                  onClick={() => setActiveDir(dir)}
                  className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden transition-all duration-300 ${
                    activeDir.id === dir.id 
                      ? 'border-[2px] border-white scale-110 shadow-xl' 
                      : 'border-2 border-transparent opacity-50 hover:opacity-100 hover:scale-105 filter grayscale hover:grayscale-0'
                  }`}
                >
                  <img src={dir.thumb} alt={dir.name} className="w-full h-full object-cover" />
                </button>
              </div>
            ))}
          </div>

          {/* Footer Info Line */}
          <div className="grid grid-cols-2 md:grid-cols-3 items-end border-t border-white/20 pt-6">
            
            <div className="flex flex-col">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDir.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xl md:text-2xl font-medium tracking-tight">{activeDir.name}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden md:flex flex-col items-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDir.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm md:text-base font-medium text-white/70 uppercase tracking-wider">{activeDir.role}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-end text-right">
              {/* Mobile fallback role se necessário futuramente */}
            </div>

          </div>
        </div>

        </div>
        </div>
      </div>
    </section>
  );
};

export default SobreDiretoria;
