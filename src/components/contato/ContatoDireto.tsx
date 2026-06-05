import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const ContatoDireto = () => {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-t border-surface-200">
      <div className="container mx-auto px-4 md:px-6 xl:px-12">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900">
            Prefere o contato direto?
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-10">
          
          <motion.a
            href="https://wa.me/558000000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-5 bg-white p-6 rounded-3xl border border-surface-200 w-full sm:w-auto min-w-[300px] shadow-sm hover:shadow-lg hover:border-green-400 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-1">WhatsApp</p>
              <p className="text-lg font-bold text-dark-900 group-hover:text-green-600 transition-colors">
                (00) 0000-0000
              </p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:contato@farmacon.com.br"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex items-center gap-5 bg-white p-6 rounded-3xl border border-surface-200 w-full sm:w-auto min-w-[300px] shadow-sm hover:shadow-lg hover:border-primary-400 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-500 uppercase tracking-wider mb-1">E-mail</p>
              <p className="text-lg font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                contato@farmacon.com.br
              </p>
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default ContatoDireto;
