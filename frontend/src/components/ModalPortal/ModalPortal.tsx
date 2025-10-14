import { useEffect, useState, type FC } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../store/modalSlice';
import { type modalType } from '../../types/modalTypes';
import { useAppSelector } from '../../store/store';

const ModalPortal: FC = () => {
   const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);
   const dispatch = useDispatch();

   useEffect(() => {
      const aside = document.getElementById('modal-result');
      setPortalEl(aside);

      const handleClickOutside = (e: MouseEvent) => {
         if (aside && aside.contains(e.target as Node)) dispatch(hideModal());
      }

      document.addEventListener('mousedown', handleClickOutside); 

      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, [dispatch]);

   const currModalType: modalType = useAppSelector((state) => state.modal.activeModal)

   if (!currModalType || !portalEl) return null;

   const displayMessage = () => {
      switch (currModalType) {
         case 'completeScene': 
            return <p>Дело успешно раскрыто!</p>
         case 'hint':
            return <p>Подсказка</p>
         case 'about':
            return <p>Добро пожаловать в UI Crime Scene. Найди все UX-преступления!</p>
         default: 
            return null
      }
   }

   return (
      createPortal(<div className='modal-portal'>{displayMessage()}</div>, portalEl)
   )
}

export default ModalPortal;