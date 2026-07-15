import { useState, useEffect } from 'react';
import { m, AnimatePresence  } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useModalSolucoes } from '../../hooks/useModalSolucoes';

const MenuPrincipal = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openModal } = useModalSolucoes();

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on mount and route change
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);



    const scrollToTopSmooth = () => {
        const startY = window.scrollY;
        const duration = 600;
        const startTime = performance.now();

        const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

        const animateScroll = (currentTime: number) => {
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startY * (1 - easeOutExpo(progress)));
            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };
        requestAnimationFrame(animateScroll);
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsMenuOpen(false);

        if (path === '/' || path === '/sobre' || path === '/contato') {
            if (location.pathname === path) {
                scrollToTopSmooth();
            } else {
                window.scrollTo(0, 0);
                setTimeout(() => window.scrollTo(0, 0), 50);
                navigate(path);
            }
            return;
        }

        if (path.startsWith('/#')) {
            const hash = path.substring(2);
            navigate(path);
            setTimeout(() => {
                const element = document.getElementById(hash);
                if (element) {
                    const offset = 80;
                    const top = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const navLinks = [
        { name: 'Início', path: '/' },
        { name: 'RX Análises', path: '/#rx-analises', isSubItem: true },
        { name: 'Gestão e Performance', path: '/#gestao', isSubItem: true },
        { name: 'Ecossistema RX', path: '/#rx-solucoes', isSubItem: true },
        { name: 'Depoimentos', path: '/#depoimentos', isSubItem: true },
        { name: 'Contato', path: '/contato' },
        { name: 'Trabalhe conosco', path: 'https://google.com.br', external: true },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
                isScrolled ? 'py-3 bg-dark-950/90 backdrop-blur-xl border-white/10 shadow-sm' : 'py-4 md:py-6 bg-transparent border-transparent'
            }`}
        >
            <div className="w-full px-3 sm:px-4 md:px-8 xl:px-12 mx-auto flex items-center justify-between mt-1 md:mt-2 transition-all">
                
                {/* Logo */}
                <a href="/" onClick={(e) => handleNavigation(e, '/')} className="flex items-center z-50 relative min-w-0">
                    <img src="/logo/logo-fitcount-hz-cor-clara.png" alt="Fitcount" className="h-5 sm:h-7 md:h-8 w-auto transition-opacity duration-300" />
                </a>

                {/* Right Group: CTA + Menu Dropdown Toggle */}
                <div className="flex items-center justify-end gap-1 sm:gap-2 md:gap-4 relative z-50 shrink-0">
                    
                    <button
                        onClick={() => openModal()}
                        className="px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 rounded-full font-semibold text-[10px] sm:text-[11px] md:text-sm transition-all shadow-sm cursor-pointer border bg-primary-500 border-primary-500 text-white hover:bg-primary-600 hover:border-primary-600"
                    >
                        <span className="hidden sm:inline">Solicitar um diagnóstico</span>
                        <span className="sm:hidden">Diagnóstico</span>
                    </button>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`group flex items-center justify-center gap-1 sm:gap-1.5 md:gap-3 px-2.5 py-1.5 sm:px-5 sm:py-2 md:py-2.5 rounded-full font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase transition-all duration-300 border backdrop-blur-md cursor-pointer ${isMenuOpen ? 'bg-primary-600 text-white border-transparent shadow-md' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
                    >
                        <span className="mt-[1px]">{isMenuOpen ? 'Fechar' : 'Menu'}</span>
                        
                        <div className={`flex flex-row items-center justify-center gap-[3px] transition-transform duration-300 origin-center ${isMenuOpen ? 'rotate-90' : 'group-hover:rotate-90'}`}>
                            <div className="w-[5px] h-[5px] rounded-full transition-all duration-300 border bg-white border-white" />
                            <div className="w-[5px] h-[5px] rounded-full transition-all duration-300 border bg-white border-white" />
                            <div className="w-[5px] h-[5px] rounded-full transition-all duration-300 border bg-white border-white" />
                        </div>
                    </button>

                    {/* Menu Dropdown Panel */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <m.div
                                initial={{ opacity: 0, y: -10, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                                transition={{ duration: 0.25, type: "spring", stiffness: 350, damping: 25 }}
                                className="absolute top-full mt-4 right-0 w-[calc(100vw-32px)] md:w-auto md:min-w-[280px] bg-dark-950 border border-white/10 rounded-3xl p-4 md:p-5 shadow-2xl origin-top-right flex flex-col gap-1 overflow-hidden"
                            >
                                {navLinks.map((link, i) => (
                                    <m.a
                                        key={link.name}
                                        href={link.path}
                                        target={link.external ? "_blank" : undefined}
                                        rel={link.external ? "noopener noreferrer" : undefined}
                                        onClick={(e) => {
                                            if (link.external) {
                                                setIsMenuOpen(false);
                                                return; // Allow normal link behavior for external
                                            }
                                            handleNavigation(e, link.path);
                                        }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.05, duration: 0.3 }}
                                        className={`group flex items-center justify-between cursor-pointer relative z-10 transition-all ${
                                            link.isSubItem
                                                ? 'py-2 px-3 md:px-4 hover:bg-white/5 rounded-xl'
                                                : 'p-2 md:p-3 rounded-2xl hover:bg-white/5'
                                        } ${location.pathname === link.path && !link.isSubItem ? 'bg-white/10' : ''}`}
                                    >
                                        <div className="flex items-center">
                                            {link.isSubItem && (
                                                <div className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${location.pathname === link.path ? 'bg-primary-500' : 'bg-white/20 group-hover:bg-primary-400'}`} />
                                            )}
                                            <span className={`transition-colors uppercase ${
                                                link.isSubItem
                                                    ? 'text-[10px] md:text-xs font-semibold tracking-wider text-gray-400 group-hover:text-primary-400'
                                                    : 'text-xs md:text-sm font-bold tracking-widest text-white group-hover:text-primary-500'
                                            } ${location.pathname === link.path ? 'text-primary-500' : ''}`}>
                                                {link.name}
                                            </span>
                                        </div>
                                        <ArrowRight size={16} className={`transition-all duration-300 ${
                                            location.pathname === link.path && !link.isSubItem ? 'opacity-100 translate-x-0 text-primary-600' : 'text-surface-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary-600'
                                        }`} />
                                    </m.a>
                                ))}
                            </m.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
            
            <AnimatePresence>
                {isMenuOpen && (
                    <m.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-dark-900/10 backdrop-blur-sm -mt-[80px]"
                        style={{ height: '120vh' }}
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </header>
    );
};

export default MenuPrincipal;

