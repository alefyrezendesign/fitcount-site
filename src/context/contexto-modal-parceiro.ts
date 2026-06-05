import { createContext } from 'react';

export interface PartnerModalContextType {
  isOpen: boolean;
  selectedPlan: string;
  openModal: (plan?: string) => void;
  closeModal: () => void;
}

export const ContextoModalParceiro = createContext<PartnerModalContextType | null>(null);

