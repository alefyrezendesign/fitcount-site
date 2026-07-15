import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';
import { TypewriterBadge } from '../ui/TypewriterBadge';

const SecaoHero = () => {
  const { openModal } = useModalSolucoes();
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <div ref={heroRef} className="relative w-full h-[200vh] z-0">
      <section className="sticky top-0 w-full h-screen bg-dark-950 flex flex-col items-center justify-center overflow-hidden isolate pt-24 md:pt-0 pb-10 md:pb-0">
        
        {/* Video Background (Full Screen) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        >
          {/* Vídeo local de academia fornecido pelo usuário */}
          <source src="/background/background-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay para contraste e tom azulado do fundo */}
        <div className="absolute inset-0 bg-dark-950/70 z-0" />

        <m.div style={{ scale, opacity }} className="container mx-auto px-6 md:px-10 h-full flex flex-col items-center justify-center z-10 w-full relative text-center">
        
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <TypewriterBadge 
              text="CONTABILIDADE ESPECIALIZADA NO MERCADO FITNESS"
              icon={
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              }
              autoStart
              baseDelay={10}
              inverted={true}
            />
          </m.div>

          <m.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white max-w-4xl mx-auto"
          >
            Seu negócio fitness <br /> 
            em movimento. <br /> 
            <span className="font-light italic text-slate-300">Seus resultados escalando.</span>
          </m.h1>

          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[15px] md:text-[1.1rem] text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto mb-10"
          >
            A FitCount conecta contabilidade, estratégia tributária e gestão financeira para você tomar decisões com mais clareza, segurança e previsibilidade.
          </m.p>

          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center"
          >
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-[15px] transition-all bg-primary-500 text-white hover:bg-primary-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              Solicitar um diagnóstico
            </button>
            <a 
              href="#rx-solucoes" 
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-[15px] transition-all border border-white/20 bg-dark-950/50 text-white hover:bg-dark-950/70 text-center"
            >
              Conheça a FitCount
            </a>
          </m.div>

        </m.div>
      </section>
    </div>
  );
};

export default SecaoHero;
