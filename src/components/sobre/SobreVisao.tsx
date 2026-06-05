import { motion, useInView } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import { useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';

const servicos = [
  {
    title: "Contabilidade Gerencial",
    desc: "Equipe altamente capacitada em contabilidade, fiscal e tributação, trabalhando de forma integrada para maximizar resultados."
  },
  {
    title: "Emissão de guias e declarações",
    desc: "Acompanhamento contínuo dos prazos legais e expertise absoluta nas legislações específicas do varejo farmacêutico."
  },
  {
    title: "Planejamento tributário contínuo",
    desc: "Análise do seu panorama atual fornecendo indicadores claros, apresentação de planos de redução e mitigação de riscos."
  },
  {
    title: "Legalização de empresas e farmácias",
    desc: "Agilidade e rapidez na legalização de CNPJs nos âmbitos federal, estadual e municipal com foco em farmácias."
  },
  {
    title: "Credenciamento de PBMs",
    desc: "Instalamos e acompanhamos programas das indústrias para fidelizar clientes locais e impulsionar suas vendas."
  },
  {
    title: "Previsibilidade tributária",
    desc: "Projeções financeiras embasadas para prevenir passivos e otimizar sua carga tributária com total segurança jurídica."
  },
  {
    title: "Credenciamento do BIONEXO",
    desc: "Única empresa especializada do Brasil. Facilitamos a multicanalidade de vendas pelo maior sistema de licitações."
  },
  {
    title: "Desenvolvimento de estudos tributários",
    desc: "Análises profundas e sob medida para identificar as melhores oportunidades e cenários para a sua operação específica."
  },
  {
    title: "Desenvolvimento de centros de distribuição",
    desc: "Consultoria estratégica, fiscal e contábil focada na estruturação e expansão logística do seu negócio."
  },
  {
    title: "Mapeamento de benefícios regionais e estaduais",
    desc: "Levantamento e aplicação de todos os incentivos fiscais locais aplicáveis para blindar sua margem de lucro."
  },
  {
    title: "Recuperações tributárias judiciais",
    desc: "Atuação jurídica especializada e focada em reaver impostos federais pagos indevidamente ao longo dos anos."
  },
  {
    title: "Recuperações administrativas na RFB",
    desc: "Com tecnologia própria, nossos especialistas retroagem os últimos 60 meses para recuperar tributos federais."
  },
  {
    title: "Desenvolvimento de holdings",
    desc: "Proteção patrimonial e sucessão familiar estruturadas com foco em eficiência tributária e societária."
  },
  {
    title: "Processos tributários e defesas",
    desc: "Cuidamos de notificações e infrações com altíssimo sucesso junto ao CRF, CFF, Receita Federal e Secretarias de Fazenda."
  }
];

const SolutionItem = ({ servico, index }: { servico: any, index: number }) => {
  const ref = useRef(null);
  
  // O isOn agora é reativo ao scroll. 
  // Ativa quando o elemento passa da linha inferior (-30% da tela) e desativa ao descer de volta.
  const isOn = useInView(ref, { margin: "0px 0px -30% 0px" });
  
  const numStr = (index + 1).toString().padStart(2, '0');
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 py-8 border-b border-slate-100 last:border-b-0 group"
    >
      {/* Número */}
      <div className="pt-1 flex-shrink-0 w-8">
        <span className={`font-mono text-[13px] md:text-[15px] font-[600] tracking-wider transition-colors duration-300 ${isOn ? 'text-blue-600' : 'text-slate-300'}`}>
          {numStr}
        </span>
      </div>

      {/* Conteúdo Central */}
      <div className="flex-1 flex flex-col gap-2.5">
        <h3 className={`text-[1.3rem] md:text-[1.5rem] font-semibold tracking-tight transition-colors duration-300 ${isOn ? 'text-slate-900' : 'text-slate-400'}`}>
          {servico.title}
        </h3>
        <p className={`text-[14px] md:text-[15px] leading-relaxed font-light md:pr-10 transition-colors duration-300 ${isOn ? 'text-slate-500' : 'text-slate-300'}`}>
          {servico.desc}
        </p>
      </div>

      {/* Toggle Icon à direita */}
      <div className="pt-2 sm:pt-1 flex-shrink-0">
        <div className={`w-[36px] h-[20px] rounded-full relative flex items-center p-[2px] transition-colors duration-300 ease-out ${isOn ? 'bg-blue-600' : 'bg-slate-200'}`}>
          <div className={`w-[16px] h-[16px] bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-out ${isOn ? 'translate-x-[16px]' : 'translate-x-0'}`} />
        </div>
      </div>
    </motion.div>
  );
};

const SobreVisao = () => {
  return (
    <section className="pt-12 pb-4 md:pt-16 md:pb-8 relative -mt-[15vh] lg:-mt-[25vh] z-20">
      {/* Background removido a pedido */}
      <div className="container mx-auto px-5 md:px-10 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative">
          
          {/* Lado Esquerdo - Título Fixo (Sticky) */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center pt-4 lg:pt-0">
              <SectionHeader
                badgeIcon={<Lightbulb size={14} />}
                badgeText="Soluções exclusivas"
                titleLines={[
                  "Muito além",
                  "de impostos."
                ]}
                align="left"
                className="!mb-4"
              />

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-[90%] aspect-[16/10] rounded-3xl overflow-hidden mt-0 relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] group"
              >
                 <img 
                   src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop" 
                   alt="Especialistas Farmacon" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply transition-colors duration-500 group-hover:bg-transparent"></div>
              </motion.div>
            </div>
          </div>

          {/* Lado Direito - Lista Scrollável */}
          <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-[20vh] xl:pt-[25vh]">
            {servicos.map((servico, idx) => (
              <SolutionItem key={idx} servico={servico} index={idx} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreVisao;
