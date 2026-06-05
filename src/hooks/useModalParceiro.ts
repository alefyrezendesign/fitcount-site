import { useContext } from 'react';
import { ContextoModalParceiro } from '../context/contexto-modal-parceiro';

export function useModalParceiro() {
    const ctx = useContext(ContextoModalParceiro);
    if (!ctx) throw new Error('useModalParceiro must be used within PartnerModalProvider');
    return ctx;
}

