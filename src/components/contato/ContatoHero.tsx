import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const ContatoHero = () => {
  return (
    <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 flex items-center justify-center bg-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-100/40 blur-[120px]" />
        
        {/* Animated grid/lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 xl:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 shadow-sm backdrop-blur-sm mb-6"
          >
            <MessageSquare size={16} className="text-primary-600" />
            <span className="text-[10.5px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] text-primary-700">Fale com a equipe Farmacon</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-dark-900 leading-[1.1] mb-6"
          >
            Vamos conversar sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">futuro da sua farmácia.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-surface-600 font-medium max-w-3xl leading-relaxed"
          >
            Seja para abrir uma nova loja, trocar de contabilidade ou entender como podemos aumentar sua margem, estamos prontos para ajudar.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContatoHero;
