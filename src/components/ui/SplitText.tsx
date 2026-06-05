import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className = '', delay = 0 }: SplitTextProps) => {
  const words = text.split(' ');
  let absoluteCharIndex = 0;

  return (
    <span
      className={`inline-flex flex-wrap ${className}`}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-flex overflow-hidden relative mr-[0.25em] last:mr-0 py-1">
          {word.split('').map((char, charIndex) => {
            const currentIdx = absoluteCharIndex++;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: "120%" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{
                  type: 'spring',
                  damping: 20,
                  stiffness: 100,
                  ease: [0.22, 1, 0.36, 1],
                  delay: delay + (currentIdx * 0.025), // 0.025s por letra
                }}
                className="inline-block relative"
                aria-hidden="true"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

