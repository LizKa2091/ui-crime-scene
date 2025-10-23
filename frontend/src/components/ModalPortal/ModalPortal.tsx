import { type FC } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Button, Flex } from 'antd';

import { hideModal } from '../../store/modalSlice';
import { type modalType } from '../../types/modalTypes';
import { useAppSelector } from '../../store/store';

import styles from './ModalPortal.module.scss';

const ModalPortal: FC = () => {
   const rootContainer = document.getElementById('root');

   const dispatch = useDispatch();

   const currModalType: modalType = useAppSelector((state) => state.modal.activeModal);
   const modalData: string | null = useAppSelector((state) => state.modal.modalData);

   if (!currModalType || !rootContainer) return null;

   const handleClose = () => {
      dispatch(hideModal())
   }

   const displayMessage = () => {
      switch (currModalType) {
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
      <Flex onClick={handleClose} className={styles.modalOverlay}>
         <Flex onClick={(e) => e.stopPropagation()} className={styles.modalContainer}>
            <Button onClick={handleClose} className={styles.modalButton}>X</Button>
            {displayMessage()}
         </Flex>
      </Flex>, 
   rootContainer)
}

export default ModalPortal;