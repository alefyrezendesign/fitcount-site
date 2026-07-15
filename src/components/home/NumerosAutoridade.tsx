import { m, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';
import { useEffect, useRef } from 'react';

interface AnimatedNumberProps {
  from: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedNumber = ({ from, to, duration = 2, prefix = "", suffix = "", className = "" }: AnimatedNumberProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: 'easeOut' });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return (
    <m.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex items-center justify-center ${className}`}
    >
      <span className="font-inherit">{prefix}</span>
      <m.span className="font-inherit">{rounded}</m.span>
      <span className="font-inherit">{suffix}</span>
    </m.div>
  );
};

const NumerosAutoridade = () => {
  const { openModal } = useModalSolucoes();

  return (
    <section className="relative w-full bg-surface-200 overflow-hidden isolate">
      
      {/* ================= FULL WIDTH SPLIT SECTION ================= */}
      <div className="relative w-full flex flex-col md:flex-row min-h-[500px] md:h-[60vh] max-h-[700px] z-20">
        
        {/* Lado Esquerdo: Texto (Fundo Laranja) */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full bg-primary-500 flex items-center justify-center p-10 md:p-16 lg:p-24 relative overflow-hidden">
          <div className="relative z-10 w-full max-w-lg">
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-tight leading-[1.1] text-white mb-8 text-center md:text-left">
              Inteligência contábil e financeira exclusiva para o mercado fitness.
            </h2>
            <div className="flex justify-center md:justify-start">
              <button 
                onClick={() => openModal()}
                className="px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-[15px] text-white bg-[#07111F] hover:bg-[#0b1728] transition-colors shadow-lg shadow-black/20 w-full sm:w-auto"
              >
                Junte-se a nós
              </button>
            </div>
          </div>
        </div>

        {/* Lado Direito: Imagem Quadrada Edge-to-Edge */}
        <div className="w-full h-1/2 md:w-1/2 md:h-full relative overflow-hidden bg-surface-100">
          <div className="w-full h-full">
            <img 
              src="/background/bg-consultor-02.jpg" 
              alt="Consultoria e Inteligência Fitness" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl my-16 md:my-20">
        
        {/* ================= BOTTOM BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* Card 1: Light Accent Card (Atuação 100%) */}
          <div className="col-span-1 md:col-span-3 bg-white border border-slate-200 rounded-[2rem] p-6 lg:p-8 flex flex-col justify-end relative min-h-[250px] lg:min-h-[300px]">
            {/* Arrow icon */}
            <div className="absolute top-6 right-6 text-dark-900 bg-dark-900/10 p-2 rounded-full">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            
            <div className="mt-16">
              <h4 className="text-dark-900 mb-3 italic">
                Engajamento &<br/>Experiência
              </h4>
              <p className="text-gray-800 text-sm leading-relaxed font-medium">
                Plataforma que oferece uma imersão financeira completa para líderes do segmento fitness.
              </p>
            </div>
          </div>

          {/* Card 2: Dark Square (Visão Integrada) */}
          <div className="col-span-1 md:col-span-3 bg-dark-950 rounded-[2rem] p-6 lg:p-8 shadow-xl text-white flex flex-col justify-end relative min-h-[250px] lg:min-h-[300px]">
            {/* Avatares (Especialistas) no topo esquerdo */}
            <div className="absolute top-6 left-6 flex -space-x-3">
               <img src="/small-fotos-contato/small-fotos-contato-1.jpg" alt="Especialista 1" className="w-10 h-10 rounded-full border-[2.5px] border-dark-950 object-cover" />
               <img src="/small-fotos-contato/small-fotos-contato-2.jpg" alt="Especialista 2" className="w-10 h-10 rounded-full border-[2.5px] border-dark-950 object-cover" />
               <img src="/small-fotos-contato/small-fotos-contato-3.jpg" alt="Especialista 3" className="w-10 h-10 rounded-full border-[2.5px] border-dark-950 object-cover" />
               <div className="w-10 h-10 rounded-full border-[2.5px] border-dark-950 bg-primary-500 text-white flex items-center justify-center text-sm font-medium z-10">
                 +
               </div>
            </div>

            {/* Arrow icon */}
            <div className="absolute top-6 right-6 text-white/50 border border-white/20 p-2 rounded-full">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </div>
            
            <div className="mt-16">
              <h4 className="mb-3 italic text-white">Ferramentas &<br/>Suporte</h4>
              <p className="text-surface-400 text-sm leading-relaxed">
                Nós oferecemos análises prontas e templates para facilitar a tomada de decisão contábil e fiscal.
              </p>
            </div>
          </div>

          {/* Card 3: Big Numbers (Stats Area) */}
          <div className="col-span-1 md:col-span-6 bg-transparent flex flex-col justify-center gap-12">
             <div className="flex flex-row justify-between items-start gap-2 md:gap-4">
                {/* Stat 1 */}
                <div className="flex flex-col items-center">
                   <AnimatedNumber from={0} to={100} prefix="+" className="text-dark-950 mb-2 md:mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" />
                   <p className="text-gray-700 font-medium text-xs md:text-sm lg:text-base leading-tight text-center">
                     Clientes ativos<br className="hidden sm:block" /> na base
                   </p>
                </div>
                {/* Stat 2 */}
                <div className="flex flex-col items-center">
                   <AnimatedNumber from={0} to={100} suffix="%" className="text-dark-950 mb-2 md:mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" />
                   <p className="text-gray-700 font-medium text-xs md:text-sm lg:text-base leading-tight text-center">
                     Foco no<br className="hidden sm:block" /> mercado fitness
                   </p>
                </div>
                {/* Stat 3 */}
                <div className="flex flex-col items-center">
                   <AnimatedNumber from={0} to={360} suffix="º" className="text-dark-950 mb-2 md:mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight" />
                   <p className="text-gray-700 font-medium text-xs md:text-sm lg:text-base leading-tight text-center">
                     Visão integrada<br className="hidden sm:block" /> do negócio
                   </p>
                </div>
             </div>
             
             {/* Pill-shaped menu like the reference */}
             <div>
                <div className="hidden md:flex w-full justify-between items-center text-[10px] md:text-xs lg:text-sm font-semibold text-dark-950 border border-dark-950 rounded-full py-4 px-8 lg:px-12">
                  <span className="cursor-default whitespace-nowrap">Planejamento</span>
                  <div className="h-4 w-[1px] bg-gray-300 shrink-0" />
                  <span className="cursor-default whitespace-nowrap">BPO Financeiro</span>
                  <div className="h-4 w-[1px] bg-gray-300 shrink-0" />
                  <span className="cursor-default whitespace-nowrap">Contabilidade</span>
                  <div className="h-4 w-[1px] bg-gray-300 shrink-0" />
                  <span className="cursor-default whitespace-nowrap">Legalização</span>
                  <div className="h-4 w-[1px] bg-gray-300 shrink-0" />
                  <span className="cursor-default whitespace-nowrap">Gestão</span>
                </div>
             </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default NumerosAutoridade;
