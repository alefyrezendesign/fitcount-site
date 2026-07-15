import { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent  } from 'framer-motion';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';
import {
  Eye, TrendingDown, CreditCard, Landmark, TrendingUp,
  Tag, EyeOff, Cog, BarChart3, ArrowRight,
} from 'lucide-react';

/* ── Data ──────────────────────────────────────────── */
const services = [
  {
    num: '01', title: 'Fluxo de caixa', tags: ['Entradas e saídas', 'Previsibilidade'],
    desc: 'Sem controle de entradas e saídas, você trabalha no escuro. A falta de previsibilidade do fluxo de caixa pode esconder prejuízos e impedir o crescimento sustentável da sua operação.',
    icon: BarChart3,
  },
  {
    num: '02', title: 'Impostos pagos a mais', tags: ['Planejamento tributário', 'Prevenção'],
    desc: 'Academias muitas vezes pagam impostos indevidos no enquadramento. Sem uma revisão tributária, você pode estar deixando parte do seu lucro na mesa do governo todos os meses.',
    icon: TrendingDown,
  },
  {
    num: '03', title: 'Altas taxas de cartões', tags: ['Maquininhas', 'Cobranças indevidas'],
    desc: 'Você sabe exatamente quanto as maquininhas estão levando do seu lucro? Taxas não negociadas e cobranças indevidas corroem sua margem de forma silenciosa e contínua.',
    icon: CreditCard,
  },
  {
    num: '04', title: 'Taxas bancárias', tags: ['Custos recorrentes', 'Tarifas ocultas'],
    desc: 'Mapeie custos financeiros recorrentes que passam despercebidos na operação. Tarifas bancárias, taxas de manutenção e juros acumulados podem representar uma fatia significativa do seu faturamento.',
    icon: Landmark,
  },
  {
    num: '05', title: 'Margem de lucro', tags: ['Rentabilidade', 'Análise por categoria'],
    desc: 'Veja com clareza onde sua margem está sendo comprimida. Analisamos cada categoria de produto para identificar onde você ganha e onde está perdendo dinheiro sem perceber.',
    icon: TrendingUp,
  },
  {
    num: '06', title: 'Precificação incorreta', tags: ['Formação de preço', 'Competitividade'],
    desc: 'Evite vender com margem baixa por falhas na formação de preço. Uma precificação mal calibrada destrói a lucratividade antes mesmo do produto chegar à prateleira.',
    icon: Tag,
  },
  {
    num: '07', title: 'Custos invisíveis', tags: ['Despesas ocultas', 'Previsibilidade'],
    desc: 'Revele despesas ocultas que prejudicam a previsibilidade financeira. Custos que não aparecem nos relatórios podem estar drenando seu resultado mês após mês.',
    icon: EyeOff,
  },
  {
    num: '08', title: 'Desperdícios operacionais', tags: ['Eficiência', 'Processos internos'],
    desc: 'Encontre gargalos que consomem tempo, dinheiro e eficiência. Processos manuais, retrabalho e falta de automação prejudicam a operação e reduzem o lucro.',
    icon: Cog,
  },
];

/* ── Constants ─────────────────────────────────────── */
const ITEM_H = 150; // 149px height + 1px border
const VISIBLE = 2;
const MAX_FLOAT = services.length - VISIBLE; // 6

/* ── Component ─────────────────────────────────────── */
const AnalisesRx = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { openModal } = useModalSolucoes();

  const [desktop, setDesktop] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeFloat, setActiveFloat] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  useEffect(() => {
    const c = () => setDesktop(window.innerWidth >= 768);
    c();
    window.addEventListener('resize', c);
    return () => window.removeEventListener('resize', c);
  }, []);

  /* ── Scroll Logic (Desktop) ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (desktop) {
      setActiveFloat(latest * MAX_FLOAT);
    }
  });

  // Calculate the vertical shift for the carousel
  // Subtracting (VISIBLE * ITEM_H) / 2 to vertically center the 3 active items around top: 50%
  const yTrack = useTransform(scrollYProgress, v => {
    const f = v * MAX_FLOAT;
    return -f * ITEM_H - (VISIBLE * ITEM_H) / 2;
  });

  /* ── Render ── */
  return (
    <section
      ref={sectionRef}
      id="fitcount-analises"
      className="relative w-full bg-white lg:h-[250vh]" // Fundo branco puro como solicitado
    >

      {/* Sticky wrapper for desktop, static for mobile */}
      <div className="md:sticky md:top-0 md:h-screen w-full flex items-center justify-center md:overflow-hidden pt-8 pb-6 md:py-0">
        
        <div className="container mx-auto px-4 md:px-8 xl:px-12 w-full max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 md:gap-10 xl:gap-24">

            {/* ══ LEFT COLUMN: Fixed Content ══ */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="w-full md:w-[45%] xl:w-[40%] shrink-0 flex flex-col justify-center relative z-20 items-center text-center md:items-start md:text-left pt-0"
            >
              {/* Badge Light Theme */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full shadow-sm bg-primary-50 border border-primary-100 mb-6 transition-all hover:bg-primary-100 mx-auto md:mx-0">
                <span className="text-primary-600">
                  <Eye size={14} strokeWidth={2.5} />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary-700">
                  RX Análise
                </span>
              </div>

              {/* Title Light Theme */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-[#07111F]">
                Análise <br className="hidden lg:block" />
                <span className="font-light italic text-slate-500">profunda.</span>
              </h2>

              {/* Description Light Theme */}
              <p className="text-[15px] md:text-[1.1rem] text-slate-600 font-medium leading-relaxed mb-10 md:mb-14 max-w-md mx-auto md:mx-0">
                Identifique impostos pagos a mais, taxas invisíveis e gargalos
                financeiros que reduzem o lucro do seu negócio fitness todos os meses.
              </p>

              {/* CTA */}
              <button
                onClick={() => openModal()}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-[15px] hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-600/25 transition-all duration-300 w-full md:w-fit"
              >
                <span>Solicitar um diagnóstico</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>

            </m.div>

            {/* ══ RIGHT COLUMN: Interactive List ══ */}
            <div className="flex-1 w-full relative z-10">
              
              {desktop ? (
                /* DESKTOP: Native scroll-driven carousel */
                <div className="relative w-full h-[500px] md:h-[600px] xl:h-[650px] flex flex-col justify-center overflow-hidden">
                  
                  {/* Carousel Track */}
                  <m.div
                    className="absolute left-0 right-0"
                    style={{ top: '50%', y: yTrack }}
                  >
                    {services.map((item, idx) => {
                      const Icon = item.icon;
                      
                      // Calculate opacity based on distance from the active 2-item window
                      let dist = 0;
                      if (idx < activeFloat) dist = activeFloat - idx;
                      else if (idx > activeFloat + 1) dist = idx - (activeFloat + 1);
                      
                      const isHov = hovered === idx;
                      // Force full opacity on hover, otherwise fade strongly based on distance
                      const op = isHov ? 1 : Math.max(0.15, 1 - dist * 0.7);

                      return (
                        <m.div
                          key={item.num}
                          onMouseEnter={() => setHovered(idx)}
                          onMouseLeave={() => setHovered(null)}
                          className="border-b border-slate-200 last:border-b-0 cursor-pointer transition-opacity duration-300 ease-out"
                          style={{ opacity: op }}
                        >
                          {/* Collapsed state MenuPrincipal (Fixed height guarantees smooth translation math) */}
                          <div className="h-[149px] flex items-center gap-4 md:gap-6 xl:gap-10">
                            <span 
                              className={`text-[1.75rem] md:text-[2rem] xl:text-[2.75rem] font-bold tabular-nums shrink-0 transition-colors duration-300 w-10 md:w-14 xl:w-16 ${isHov ? 'text-primary-500' : 'text-slate-300'}`}
                            >
                              {item.num}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h3 
                                className={`text-[1.25rem] md:text-[1.5rem] xl:text-[1.75rem] font-bold tracking-tight transition-colors duration-300 ${isHov ? 'text-[#07111F]' : 'text-slate-600'}`}
                              >
                                {item.title}
                              </h3>
                              <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                                {item.tags.map((tag, i) => (
                                  <span key={i} className="flex items-center gap-2.5">
                                    <span className={`text-[14px] xl:text-[15px] font-medium transition-colors ${isHov ? 'text-slate-500' : 'text-slate-400'}`}>{tag}</span>
                                    {i < item.tags.length - 1 && (
                                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isHov ? 'bg-primary-500' : 'bg-slate-300'}`} />
                                    )}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Hover Expansion (Flows naturally downward without pushing the track up) */}
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-out ${isHov ? 'max-h-[160px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'}`}
                          >
                            <div className="flex items-start gap-3 md:gap-4 pl-[3.5rem] md:pl-[4.5rem] xl:pl-[5.5rem] pr-4">
                              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                                <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                              </div>
                              <p className="text-[13px] md:text-[14.5px] text-slate-500 leading-relaxed max-w-lg">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </m.div>
                      );
                    })}
                  </m.div>
                </div>
              ) : (
                /* MOBILE: Standard Click Accordion */
                <div className="space-y-0 mt-8">
                  {services.map((item, idx) => {
                    const Icon = item.icon;
                    const isOpen = mobileOpen === idx;
                    
                    return (
                      <m.div 
                        key={item.num} 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.4 }} 
                        className="border-b border-slate-200 last:border-b-0 transition-all duration-300"
                      >
                        <button 
                          onClick={() => setMobileOpen(isOpen ? null : idx)} 
                          className="w-full flex items-start gap-4 py-6 text-left"
                        >
                          <span className={`text-[1.35rem] font-bold tabular-nums leading-none pt-0.5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary-500' : 'text-slate-300'}`}>
                            {item.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className={`text-[1.15rem] font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#07111F]' : 'text-slate-600'}`}>
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                              {item.tags.map((tag, i) => (
                                <span key={i} className="flex items-center gap-2">
                                  <span className={`text-[12px] font-medium ${isOpen ? 'text-slate-500' : 'text-slate-400'}`}>{tag}</span>
                                  {i < item.tags.length - 1 && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isOpen ? 'bg-primary-500' : 'bg-slate-300'}`} />}
                                </span>
                              ))}
                            </div>
                          </div>
                          <svg className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary-500' : 'text-slate-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="flex items-start gap-3 pb-6 pl-0">
                            <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border border-primary-100">
                              <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                            </div>
                            <p className="text-[12.5px] text-slate-500 leading-relaxed pr-2">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </m.div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalisesRx;
