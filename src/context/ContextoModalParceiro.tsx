import { useState, useCallback, type ReactNode } from 'react';
import { ContextoModalParceiro } from './contexto-modal-parceiro';

export function PartnerModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState('');

    const openModal = useCallback((plan?: string) => {
        setSelectedPlan(plan || '');
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setSelectedPlan('');
    }, []);

    return (
        <ContextoModalParceiro.Provider value={{ isOpen, selectedPlan, openModal, closeModal }}>
            {children}
        </ContextoModalParceiro.Provider>
    );
}


