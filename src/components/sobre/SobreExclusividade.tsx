import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';

const expertises = [
  "Tributação farmacêutica",
  "PBMs",
  "Gestão financeira",
  "Fluxo de caixa",
  "Margem por categoria",
  "Inteligência de mercado",
  "Recuperação tributária",
  "Expansão de redes"
];

const SobreExclusividade = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <SectionHeader
              align="left"
              badgeIcon={<BadgeCheck size={14} />}
              badgeText="Exclusividade"
              titleLines={[
                "Nós não atendemos",
                "todos os segmentos.",
                "<span class=\"text-primary-600\">Atendemos farmácias.</span>"
              ]}
              subtitle="Quando você vive diariamente o mesmo segmento, começa a enxergar oportunidades invisíveis para contabilidades generalistas. Nós desenhamos processos focados nas dores de quem atua no varejo farmacêutico."
              className="mb-0"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 relative">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-primary-100/50 rounded-full blur-[100px] pointer-events-none -z-10" />

            {expertises.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-center gap-4 bg-white/60 backdrop-blur-md border border-white/60 p-5 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.1)] hover:border-primary-200 transition-all cursor-default"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                  <BadgeCheck size={20} />
                </div>
                <span className="font-semibold text-dark-900 text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SobreExclusividade;
