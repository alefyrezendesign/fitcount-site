import { createContext } from 'react';

export interface SolutionsModalContextType {
  isOpen: boolean;
  initialInterest: string;
  openModal: (interest?: string) => void;
  closeModal: () => void;
}

export const ContextoModalSolucoes = createContext<SolutionsModalContextType | null>(null);

