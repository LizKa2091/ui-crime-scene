import { useEffect, type FC } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Button, Flex } from 'antd';

import { hideModal, showModal } from '../../store/modalSlice';
import { useAppSelector } from '../../store/store';

import styles from './ModalPortal.module.scss';

const ModalPortal: FC = () => {
   const rootContainer = document.getElementById('root');

   const dispatch = useDispatch();
   
   const { activeModal, modalData } = useAppSelector((state) => state.modal);
   const { isComplete } = useAppSelector((state) => state.crime);

   if (!activeModal || !rootContainer) return null;

   const handleCloseButton = () => {
      if (isComplete && activeModal === 'hint') {
         dispatch(showModal({ activeModal: 'completeScene' }));
         return;
      }
      
      dispatch(hideModal());
   }

   const displayMessage = () => {
      switch (activeModal) {
         case 'completeScene': 
            return <p>Дело успешно раскрыто!</p>;
         case 'hint':
            return (
               <Flex vertical>
                  <h3>Преступление найдено!</h3>
                  <p>{modalData}</p>
               </Flex>
            );
         case 'about':
            return <p>Добро пожаловать в UI Crime Scene. Найди все UX-преступления!</p>;
         default: 
            return null;
      }
   }

   return createPortal(
      <Flex onClick={() => dispatch(hideModal())} className={styles.modalOverlay}>
         <Flex onClick={(e) => e.stopPropagation()} className={styles.modalContainer}>
            <Button onClick={handleCloseButton} className={styles.modalButton}>X</Button>
            {displayMessage()}
         </Flex>
      </Flex>, 
   rootContainer)
}

export default ModalPortal;