import { m } from 'framer-motion';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';

const SecaoFotoFrase = () => {
  const { openModal } = useModalSolucoes();

  return (
    <section className="relative w-full flex flex-col md:flex-row min-h-[500px] md:h-[60vh] max-h-[600px] z-20">
      
      {/* Lado Esquerdo: Foto */}
      <div className="w-full h-1/2 md:w-1/2 md:h-full relative overflow-hidden">
        <img 
          src="/background/bg-foto-frase.jpg" 
          alt="Treinamento e FOco" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay escuro leve caso a foto seja muito clara */}
        <div className="absolute inset-0 bg-dark-950/20" />
      </div>

      {/* Lado Direito: Fundo Azul Escuro com Frase */}
      <div className="w-full h-1/2 md:w-1/2 md:h-full bg-dark-950 flex items-center justify-center p-10 md:p-16 lg:p-24 relative overflow-hidden">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-lg"
        >
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-white leading-[1.2] tracking-tight text-center md:text-left mb-10">
            Transformando a complexidade do seu negócio em decisões claras.
          </h2>
          
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={() => openModal()}
              className="px-8 py-4 rounded-full font-bold text-[15px] text-white bg-primary-500 hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20 flex items-center gap-3 group"
            >
              Solicitar diagnóstico
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </m.div>
      </div>

    </section>
  );
};

export default SecaoFotoFrase;
