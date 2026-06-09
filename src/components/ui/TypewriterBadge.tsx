import { useRef, type ReactNode } from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterBadgeProps {
  text: string;
  icon?: ReactNode;
  inverted?: boolean;
  className?: string;
  autoStart?: boolean;
  startDelay?: number;
}

export const TypewriterBadge = ({ text, icon, inverted, className = '', autoStart = false, startDelay = 300 }: TypewriterBadgeProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { displayed, done } = useTypewriter(text, ref, { threshold: 0.5, baseDelay: 40, autoStart, startDelay });

    return (
        <div
            ref={ref}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm backdrop-blur-sm ${className} ${
              inverted ? 'bg-white/20 border-white/30' : 'bg-primary-50 border-primary-100'
            }`}
        >
            {icon ? (
                <span className={`flex items-center justify-center transition-opacity duration-300 ${inverted ? 'text-white' : 'text-primary-600'}`} style={{ opacity: displayed.length > 0 ? 1 : 0.4 }}>
                    {icon}
                </span>
            ) : (
                <span className="relative flex h-2 w-2 mr-1 transition-opacity duration-300" style={{ opacity: displayed.length > 0 ? 1 : 0.4 }}>
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${inverted ? 'bg-white' : 'bg-primary-400'}`}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${inverted ? 'bg-white' : 'bg-primary-500'}`}></span>
                </span>
            )}

            <span className="sr-only">{text}</span>

            <span 
                className={`text-[10.5px] md:text-[11.5px] font-bold uppercase tracking-[0.08em] ${inverted ? 'text-white' : 'text-primary-700'}`}
                style={{ minWidth: `${text.length * 0.52}em` }}
                aria-hidden="true"
            >
                {displayed}
                {!done && (
                    <span className={`inline-block w-[2px] h-[0.85em] ml-[1px] align-middle animate-pulse ${inverted ? 'bg-white' : 'bg-primary-500'}`} aria-hidden="true" />
                )}
            </span>
        </div>
    );
};
