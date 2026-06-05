import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ContatoMapa = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6 xl:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-3xl bg-primary-50 text-primary-600 flex items-center justify-center mb-8"
            >
              <MapPin size={32} />
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-extrabold text-dark-900 tracking-tight leading-tight mb-6"
            >
              Nossa base de inteligência fica no Rio de Janeiro.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl font-medium text-surface-600 mb-8"
            >
              Mas nossa operação alcança e transforma farmácias no <span className="text-primary-600 font-bold">Brasil inteiro</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-surface-50 border border-surface-200 p-6 rounded-3xl"
            >
              <h4 className="text-lg font-bold text-dark-900 mb-2">Sede Principal</h4>
              <p className="text-surface-600">
                Av. das Américas, 1000<br/>
                Barra da Tijuca, Rio de Janeiro - RJ<br/>
                CEP: 22640-100
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full h-[400px] bg-surface-100 rounded-3xl overflow-hidden relative"
            >
              {/* Map Placeholder or actual map iframe */}
              <iframe 
                title="Mapa Sede Farmacon"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3672.684126922579!2d-43.336440923835695!3d-23.003365844005835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda29c4eb3a8d%3A0xc68d27464016b3fb!2sAv.%20das%20Am%C3%A9ricas%2C%201000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022640-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 rounded-3xl" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContatoMapa;
