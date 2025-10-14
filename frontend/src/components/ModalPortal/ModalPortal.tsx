import { useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';

interface IModalPortalProps {
   modalType: null | 'completeScene' | 'hint' | 'about';
   onClose: () => void;
}

const ModalPortal: FC<IModalPortalProps> = ({ isShowing, onClose }) => {
   const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

   useEffect(() => {
      const aside = document.getElementById('modal-result');
      setPortalEl(aside);

      const handleClickOutside = (e: MouseEvent) => {
         if (aside && aside.contains(e.target as Node)) onClose();
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, [onClose]);

   if (!isShowing || !portalEl) return null;

   return (
      createPortal(<p>Дело успешно раскрыто!</p>, portalEl)
   )
}

export default ModalPortal;