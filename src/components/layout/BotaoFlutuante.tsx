import { useState, useRef, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Activity, Instagram } from 'lucide-react';
import { useModalEspecialista } from '../../hooks/useModalEspecialista';
import { useModalRxSolucoes } from '../../hooks/useModalRxSolucoes';

const BotaoFlutuante = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  const { openModal: openEspecialista } = useModalEspecialista();
  const { openModal: openRx } = useModalRxSolucoes();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const items = [
    {
      label: 'Falar com Especialista',
      description: 'Atendimento imediato',
      icon: <MessageCircle size={18} />,
      onClick: () => {
        setIsOpen(false);
        openEspecialista();
      }
    },
    {
      label: 'Solicitar Diagnóstico',
      description: 'Análise gratuita do seu negócio',
      icon: <Activity size={18} />,
      onClick: () => {
        setIsOpen(false);
        openEspecialista();
      }
    },
    {
      label: 'Conhecer RX Soluções',
      description: 'Nossa tecnologia proprietária',
      icon: <span className="font-black text-sm tracking-tighter">RX</span>,
      onClick: () => {
        setIsOpen(false);
        openRx();
      }
    },
    {
      label: 'Seguir no Instagram',
      description: '@farmacontabilidade',
      icon: <Instagram size={18} />,
      onClick: () => {
        setIsOpen(false);
        window.open('https://www.instagram.com/farmacontabilidade', '_blank');
      }
    }
  ];

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 w-[280px] sm:w-[320px] bg-white/90 backdrop-blur-xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] rounded-3xl p-2.5 overflow-hidden ring-1 ring-black/5"
          >
            <div className="flex flex-col gap-1">
              {items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={item.onClick}
                  className="w-full p-3 flex items-center gap-4 text-left rounded-2xl hover:bg-blue-50/80 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-md transition-all duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  
                  <div className="relative z-10 flex flex-col">
                    <span className="text-[15px] font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[12px] font-medium text-slate-500 group-hover:text-blue-600/70 transition-colors">
                      {item.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      <button
        aria-label="Abrir menu de contato"
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-[22px] bg-gradient-to-tr from-[#2563eb] to-[#1d4ed8] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 relative border border-white/20 z-10 group"
      >
        <m.div
          animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
        </m.div>
        
        <m.div
          animate={{ rotate: isOpen ? 0 : -180, scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute"
        >
          <X size={28} strokeWidth={2.5} />
        </m.div>
      </button>

    </div>
  );
};

export default BotaoFlutuante;
