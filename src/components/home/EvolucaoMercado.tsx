import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Rocket, ShieldCheck, BarChart3, CalendarDays, TrendingUp, ChevronDown } from 'lucide-react';

const items = [
  {
    id: '01',
    icon: ShieldCheck,
    title: 'Margem protegida',
    subtitle: 'Auditoria Tributária Contínua',
    content: 'Auditoria tributária contínua que devolve ao caixa o que nunca deveria ter saído. Monitoramos cada operação fiscal para garantir que seu negócio fitness não pague mais do que deve.'
  },
  {
    id: '02',
    icon: BarChart3,
    title: 'Clareza estratégica',
    subtitle: 'Dashboards & Indicadores',
    content: 'Dashboards e indicadores construídos para a realidade do mercado fitness. Visualize seus números com clareza e tome decisões baseadas em dados reais.'
  },
  {
    id: '03',
    icon: CalendarDays,
    title: 'Previsibilidade real',
    subtitle: 'Planejamento Financeiro',
    content: 'Planejamento financeiro sob medida, para decidir com meses de antecedência. Antecipe cenários e proteja o futuro da sua operação com projeções precisas.'
  },
  {
    id: '04',
    icon: TrendingUp,
    title: 'Crescimento escalável',
    subtitle: 'Estratégia de Expansão',
    content: 'Estruture sua operação para crescer sem perder rentabilidade. Modelagem financeira para abertura de novas unidades ou ampliação de forma segura e sustentável.'
  }
];

const EvolucaoMercado = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 lg:py-32 font-sans relative overflow-hidden isolate">

      <div className="container mx-auto px-6 md:px-10 lg:px-12 max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
          
          {/* Coluna Esquerda - Texto Sticky */}
          <div className="lg:w-[40%] mb-12 lg:mb-0 lg:sticky lg:top-32 z-10">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0 max-w-2xl">
              
              {/* Badge - Agora usando as cores primary padrão */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm bg-primary-50 border border-primary-100 mb-6 transition-all hover:bg-primary-100">
                <span className="text-primary-600">
                  <Rocket size={14} strokeWidth={2.5} />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-700">
                  Evolução Estratégica
                </span>
              </div>
              
              {/* Título */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#07111F]">
                O mercado <br />
                fitness está <br />
                <span className="font-light italic text-slate-500">evoluindo.</span>
              </h2>
              
              {/* Subtítulo */}
              <p className="text-[15px] md:text-[1.1rem] text-slate-600 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                Sua academia não precisa apenas mudar de contabilidade. Ela precisa de dados claros e segurança em cada operação.
              </p>
              
            </div>
          </div>

          {/* Coluna Direita - Accordion */}
          <div className="lg:w-[60%] flex flex-col gap-4 z-10">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const Icon = item.icon;

              return (
                <div 
                  key={item.id}
                  onClick={() => toggleAccordion(index)}
                  className={`
                    group rounded-[1.5rem] overflow-hidden cursor-pointer
                    transition-all duration-500 ease-out border
                    ${isOpen 
                      ? 'bg-white border-primary-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)]' 
                      : 'bg-white border-slate-200 hover:border-primary-100 hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)]'
                    }
                  `}
                >
                  {/* Cabeçalho do Accordion */}
                  <div className="flex items-center justify-between px-6 py-5 md:px-8 md:py-6 select-none">
                    <div className="flex items-center gap-5 md:gap-6">
                      <span className={`text-[13px] font-semibold tracking-widest tabular-nums transition-colors duration-400 ${isOpen ? 'text-primary-500' : 'text-slate-400'}`}>
                        {item.id}
                      </span>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-400 ${isOpen ? 'bg-primary-50 text-primary-500' : 'bg-white border border-slate-200 text-slate-400 group-hover:bg-primary-50/50 group-hover:text-primary-500/70 group-hover:border-transparent'}`}>
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className={`font-bold text-[1.1rem] md:text-xl tracking-tight transition-colors duration-400 ${isOpen ? 'text-[#07111F]' : 'text-slate-700 group-hover:text-[#07111F]'}`}>
                        {item.title}
                      </h3>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border ${isOpen ? 'bg-primary-500 border-primary-500 text-white rotate-180' : 'bg-white border-slate-200 text-slate-400 group-hover:border-primary-300 group-hover:text-primary-500 group-hover:bg-primary-50 group-hover:translate-y-[2px]'}`}>
                      <ChevronDown size={20} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Conteúdo Expansível (Animado com Framer Motion) */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 ml-[88px] md:ml-[112px]">
                           {/* Subtítulo usando cor primária em vez do azul claro antigo */}
                           <h4 className="text-primary-600 font-semibold text-[15px] mb-2">{item.subtitle}</h4>
                           <p className="text-slate-500 leading-relaxed text-[15px] md:text-base max-w-xl">
                             {item.content}
                           </p>
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default EvolucaoMercado;
