import { type FC, type ReactNode } from 'react';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import ModalPortal from '../components/ModalPortal/ModalPortal';

import styles from './MainLayout.module.scss';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {   
   return (
      <>
         <HeaderBar />
         <Content>{children}</Content>
         <Sider className={styles.sider}>
            О проекте
            <ModalPortal />
         </Sider>
      </>
   )
}

export default MainLayout;