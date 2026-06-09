import { createContext } from 'react';

export interface ModalRxSolucoesContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ContextoModalRxSolucoes = createContext<ModalRxSolucoesContextType | null>(null);
