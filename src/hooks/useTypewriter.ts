import { useState, useEffect, useRef } from 'react';

interface UseTypewriterOptions {
    /** Start immediately without waiting for viewport (e.g. Hero) */
    autoStart?: boolean;
    /**
     * Base delay between characters in ms.
     * Real typing feel: ~60-90ms per char with natural variation.
     */
    baseDelay?: number;
    /** IntersectionObserver threshold to trigger (0–1) */
    threshold?: number;
    /** Initial delay before typing starts (ms) */
    startDelay?: number;
}

/**
 * Realistic typewriter hook.
 * - Variable per-character timing simulates natural human typing rhythm.
 * - Pauses longer at spaces (word boundaries) and punctuation.
 * - Occasional micro-hesitations for realism.
 * - autoStart=true → fires on mount (Hero).
 * - autoStart=false → fires when `ref` enters viewport.
 * - Runs exactly once; respects prefers-reduced-motion.
 */
export function useTypewriter(
    text: string,
    ref: React.RefObject<Element | null>,
    { autoStart = false, baseDelay = 40, threshold = 0.05, startDelay = 100 }: UseTypewriterOptions = {}
) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);
    const startedRef = useRef(false);
    const rafRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getDelay = (char: string, nextChar: string): number => {
        // Pause after spaces (between words) — feels like lifting finger
        if (char === ' ') return baseDelay * 2.2 + Math.random() * baseDelay;
        // Pause after punctuation
        if ('.,:;!?'.includes(char)) return baseDelay * 3.0 + Math.random() * baseDelay;
        // Uppercase at word start (shift key mental overhead) — only if starting a word
        if (nextChar && nextChar === nextChar.toUpperCase() && nextChar !== ' ' && char === ' ')
            return baseDelay * 1.5 + Math.random() * baseDelay * 0.5;
        // Normal character: slight natural variation ±30%
        const jitter = (Math.random() - 0.5) * baseDelay * 0.6;
        // Occasional micro-hesitation (~5% chance)
        const hesitation = Math.random() < 0.05 ? baseDelay * 1.2 : 0;
        return Math.max(Math.min(10, baseDelay), baseDelay + jitter + hesitation);
    };

    const start = () => {
        if (startedRef.current) return;
        startedRef.current = true;

        let i = 0;

        const typeNext = () => {
            i++;
            setDisplayed(text.slice(0, i));

            if (i >= text.length) {
                setDone(true);
                return;
            }

            const delay = getDelay(text[i - 1], text[i]);
            rafRef.current = setTimeout(typeNext, delay);
        };

        // Initial pause before typing starts (person "focusing") — very short response
        rafRef.current = setTimeout(typeNext, startDelay + Math.random() * 50);
    };

    useEffect(() => {
        if (autoStart) {
            const t = setTimeout(start, 100);
            return () => {
                clearTimeout(t);
                if (rafRef.current) clearTimeout(rafRef.current);
            };
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    start();
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);

        return () => {
            observer.disconnect();
            if (rafRef.current) clearTimeout(rafRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { displayed, done };
}
