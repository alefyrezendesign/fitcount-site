import { lazy, Suspense, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MenuPrincipal from '../components/layout/MenuPrincipal';
import Rodape from '../components/layout/Rodape';
import BotaoFlutuante from '../components/layout/BotaoFlutuante';

const ModalParceiro = lazy(() => import('../components/modals/ModalParceiro'));
const ModalSolucoes = lazy(() => import('../components/modals/ModalSolucoes'));
const ModalFalarEspecialista = lazy(() => import('../components/modals/ModalFalarEspecialista'));
const ModalRxSolucoes = lazy(() => import('../components/modals/ModalRxSolucoes'));

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Força o scroll imediatamente antes do browser pintar a nova página (evita piscadas lá embaixo)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const offset = 80;
          const top = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
      // Garantia dupla para browsers teimosos (Safari/Chrome History)
      setTimeout(() => window.scrollTo(0, 0), 10);
    }
  }, [pathname, hash]);

  return null;
};

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <MenuPrincipal />
      
      <main className="bg-white min-h-screen font-sans relative">
        <Outlet />
      </main>

      <BotaoFlutuante />
      <Rodape />
      
      {/* Modals globais com lazy loading */}
      <Suspense fallback={null}>
        <ModalParceiro />
        <ModalSolucoes />
        <ModalRxSolucoes />
        <ModalFalarEspecialista />
      </Suspense>
    </>
  );
};

export default MainLayout;
