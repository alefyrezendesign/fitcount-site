import { Outlet } from 'react-router-dom';
import MenuPrincipal from '../components/MenuPrincipal';
import Rodape from '../components/Rodape';
import ModalParceiro from '../components/ModalParceiro';
import ModalSolucoes from '../components/ModalSolucoes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

      <Rodape />
      
      {/* Modals globais */}
      <ModalParceiro />
      <ModalSolucoes />
    </>
  );
};

export default MainLayout;
