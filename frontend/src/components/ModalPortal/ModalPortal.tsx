import { type FC } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Flex } from 'antd';

import { hideModal } from '../../store/modalSlice';
import { type modalType } from '../../types/modalTypes';
import { useAppSelector } from '../../store/store';

const ModalPortal: FC = () => {
   const footer = document.querySelector('.ant-layout-footer');
   const dispatch = useDispatch();

   const currModalType: modalType = useAppSelector((state) => state.modal.activeModal);
   const modalData: string | null = useAppSelector((state) => state.modal.modalData);

   if (!currModalType || !footer) return null;

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
      <div onClick={() => dispatch(hideModal())}>
         <div onClick={(e) => e.stopPropagation()}>
            {displayMessage()}
         </div>
      </div>, 
   footer)
}

export default ModalPortal;