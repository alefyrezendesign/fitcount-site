import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { AnimatedTitle } from './AnimatedTitle';

interface SectionHeaderProps {
  badgeIcon?: ReactNode;
  customBadge?: ReactNode;
  badgeText?: string;
  titleLines?: string[];
  title?: ReactNode;
  subtitleLines?: string[];
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  inverted?: boolean;
}

const SectionHeader = ({ 
  badgeIcon, 
  badgeText, 
  customBadge,
  titleLines,
  title, 
  subtitleLines,
  subtitle, 
  align = 'center',
  className = '',
  inverted = false
}: SectionHeaderProps) => {
  const isCenter = align === 'center';
  
  return (
    <div className={`flex flex-col ${isCenter ? 'items-center text-center mx-auto' : 'items-start text-left'} max-w-4xl mb-16 md:mb-24 ${className}`}>
      {/* Badge */}
      {customBadge ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mb-6 ${isCenter ? 'mx-auto' : ''}`}
        >
          {customBadge}
        </motion.div>
      ) : badgeText ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm mb-6 ${isCenter ? 'mx-auto' : ''} ${
            inverted ? 'bg-white/20 border-white/30 text-white' : 'bg-primary-50 border-primary-100'
          }`}
        >
          {badgeIcon && (
            <span className={`flex items-center justify-center ${inverted ? 'text-white' : 'text-primary-600'}`}>
              {badgeIcon}
            </span>
          )}
          <span className={`text-[10.5px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] ${inverted ? 'text-white' : 'text-primary-700'}`}>
            {badgeText}
          </span>
        </motion.div>
      ) : null}

      {/* Title */}
      {titleLines ? (
        <h2 className={`text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] mb-6 ${inverted ? 'text-white' : 'text-dark-900'}`}>
          <AnimatedTitle lines={titleLines} delay={0.1} />
        </h2>
      ) : title ? (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6 }}
          className={`text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-[1.1] mb-6 ${inverted ? 'text-white' : 'text-dark-900'}`}
        >
          {title}
        </motion.h2>
      ) : null}

      {/* Subtitle */}
      {subtitleLines ? (
        <div className={`text-[1rem] md:text-[1.1rem] font-medium leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${inverted ? 'text-white/80' : 'text-slate-600'}`}>
          <AnimatedTitle lines={subtitleLines} delay={0.4} />
        </div>
      ) : subtitle ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-[1rem] md:text-[1.1rem] font-medium leading-relaxed max-w-2xl ${isCenter ? 'mx-auto' : ''} ${inverted ? 'text-white/80' : 'text-slate-600'}`}
        >
          {subtitle}
        </motion.div>
      ) : null}
    </div>
  );
};

export default SectionHeader;

