import { createContext } from 'react';

export interface ModalEspecialistaContextType {
  isOpen: boolean;
  initialMomento?: string;
  openModal: (momento?: string) => void;
  closeModal: () => void;
}

export const ContextoModalEspecialista = createContext<ModalEspecialistaContextType | null>(null);
