import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, ChevronDown, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const AddressAccordion = ({ title, content }: { title: string, content: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-fit flex items-center gap-8 py-2 text-left transition-colors focus:outline-none group"
            >
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary-600 group-hover:border-primary-500 flex items-center justify-center shrink-0 transition-all">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-medium text-slate-300 group-hover:text-white transition-colors text-sm">{title}</span>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </div>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-3 text-sm text-slate-400 leading-relaxed mt-1">
                    <div className="pl-11">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Rodape = () => {
    const location = useLocation();
    const navigate = useNavigate();

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

    return (
        <footer className="relative bg-[#070b14] pt-20 pb-8 mt-auto overflow-hidden">
            {/* Efeitos de fundo e brilho */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-5 md:px-10 xl:px-16 relative z-10">

                {/* Top Section: Logo e Descrição */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 mb-12 mt-6">
                    <Link to="/" className="inline-block shrink-0">
                        <img 
                            src="/logo/logo-fitcount-hz-cor-clara.png" 
                            alt="Fitcount" 
                            className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity" 
                            loading="lazy"
                            decoding="async"
                        />
                    </Link>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[460px] text-center md:text-right">
                        Especialistas em contabilidade para academias, crossfits e lojas de suplementos.
                    </p>
                </div>

                {/* Divisória Superior */}
                <div className="w-full h-px bg-white/10 mb-12"></div>

                {/* Grid Central */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap lg:justify-between gap-y-12 gap-x-6 mb-16 w-full">
                    
                    {/* Coluna 1: Contato */}
                    <div className="flex flex-col gap-5 w-full sm:w-[45%] lg:w-[20%] shrink-0">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-[13px] opacity-90">Contato</h3>
                        <div className="flex flex-col gap-4">
                            <a href="tel:+552126354903" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors w-fit group">
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary-600 group-hover:border-primary-500 flex items-center justify-center shrink-0 transition-all">
                                    <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-medium text-sm">(21) 2635-4903</span>
                            </a>
                            <a 
                                href="https://wa.me/5521971807881?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Fitcount%20e%20gostaria%20de%20falar%20com%20um%20especialista." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors w-fit group"
                            >
                                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary-600 group-hover:border-primary-500 flex items-center justify-center shrink-0 transition-all">
                                    <MessageCircle className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                                </div>
                                <span className="font-medium text-sm">(21) 97180-7881</span>
                                <div className="flex items-center justify-center shrink-0 ml-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="text-slate-500 group-hover:text-[#25D366] transition-colors duration-300">
                                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Endereços */}
                    <div className="flex flex-col gap-5 w-full sm:w-[45%] lg:w-[24%] shrink-0">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-[13px] opacity-90">Endereços</h3>
                        <div className="flex flex-col gap-3">
                            <AddressAccordion 
                                title="Matriz - Itaboraí" 
                                content={
                                    <>
                                        Prédio Hellix - Av. Vinte e Dois de Maio, 6331<br />
                                        Bloco 1, 7° andar<br />
                                        Jardim Imperial, Itaboraí - RJ<br />
                                        <span className="text-slate-300 font-medium mt-2 block">CEP: 24800-258</span>
                                    </>
                                }
                            />
                            <AddressAccordion 
                                title="Filial - Rio de Janeiro" 
                                content={
                                    <>
                                        R. México, 11 Bloco B<br />
                                        Centro do Rio - RJ<br />
                                        <span className="text-slate-300 font-medium mt-2 block">CEP: 20030-114</span>
                                    </>
                                }
                            />
                        </div>
                    </div>

                    {/* Coluna 3: Institucional */}
                    <div className="flex flex-col gap-5 w-full sm:w-[45%] lg:w-[18%] shrink-0">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-[13px] opacity-90">Institucional</h3>
                        <nav className="flex flex-col gap-4">
                            <a 
                                href="/#rx-solucoes" 
                                onClick={(e) => handleNavigation(e, '/#rx-solucoes')}
                                className="text-slate-400 hover:text-primary-400 transition-colors w-fit flex items-center gap-3 group text-[13px]"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 group-hover:scale-150 transition-all"></div>
                                Soluções Fit
                            </a>
                            <a 
                                href="https://app.vaggou.com.br/fitcount" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-slate-400 hover:text-primary-400 transition-colors w-fit flex items-center gap-3 group text-[13px]"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary-500/50 group-hover:bg-primary-400 group-hover:scale-150 transition-all"></div>
                                Trabalhe conosco
                                <span className="bg-primary-500/20 text-primary-300 border border-primary-500/30 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ml-1">Vagas</span>
                            </a>
                        </nav>
                    </div>

                    {/* Coluna 4: Jurídico */}
                    <div className="flex flex-col gap-5 w-full sm:w-[45%] lg:w-[18%] shrink-0">
                        <h3 className="text-white font-semibold tracking-wider uppercase text-[13px] opacity-90">Jurídico</h3>
                        <nav className="flex flex-col gap-4">
                            <Link to="/politica-de-privacidade" className="text-slate-400 hover:text-white transition-colors w-fit flex items-center gap-3 group text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
                                Política de Privacidade
                            </Link>
                            <Link to="/termos-de-uso" className="text-slate-400 hover:text-white transition-colors w-fit flex items-center gap-3 group text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
                                Termos de Uso
                            </Link>
                            <Link to="/politica-de-cookies" className="text-slate-400 hover:text-white transition-colors w-fit flex items-center gap-3 group text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
                                Política de Cookies
                            </Link>
                        </nav>
                    </div>

                    {/* Coluna 5: Redes Sociais */}
                    <div className="flex w-full sm:w-full lg:justify-end lg:flex-1 shrink-0">
                        <div className="flex items-start gap-4">
                            <a href="https://www.instagram.com/fitcount/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/fitcount" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.linkedin.com/company/fitcount/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.youtube.com/@fitcount" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary-500 hover:text-white hover:-translate-y-1 transition-all duration-300">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Linha Inferior */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-slate-500 text-[13px]">
                        Copyright © {new Date().getFullYear()} - Fitcount Contabilidade LTDA
                    </p>
                    <p className="text-slate-500 text-[13px]">
                        CNPJ: 26.690.384/0001-05
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Rodape;

