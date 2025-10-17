import { type FC, type ReactNode } from 'react';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import ModalPortal from '../components/ModalPortal/ModalPortal';
import CrimeHint from '../components/CrimeHint/CrimeHint';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
   return (
      <>
         <HeaderBar />
         <Content>{children}</Content>
         <Sider>
            <CrimeHint errorId={0} description={''}>
               <p style={{ color: 'white' }}>я ошибка</p>
            </CrimeHint>
            <ModalPortal />
         </Sider>
      </>
   )
}

export default MainLayout;