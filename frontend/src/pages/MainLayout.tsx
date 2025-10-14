import { type FC, type ReactNode } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import ModalPortal from '../components/ModalPortal/ModalPortal';
import { useAppDispatch } from '../store/store';
import { showModal } from '../store/modalSlice';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   const dispatch = useAppDispatch();

   const handleModal = () => {
      dispatch(showModal('hint'));
   }

   return (
      <>
         <HeaderBar />
         <Content>{children}</Content>
         <Sider>
            <button onClick={handleModal}>открыть модалку</button>
            <ModalPortal />
            <div id='modal-result' />
         </Sider>
      </>
   )
}

export default MainLayout;