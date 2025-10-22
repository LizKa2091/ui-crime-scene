import { type FC, type ReactNode } from 'react';
import { Content } from 'antd/es/layout/layout';

import HeaderBar from '../components/HeaderBar/HeaderBar';
import Footerbar from '../components/FooterBar/Footerbar';

interface IMainLayoutProps {
   children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {   
   return (
      <>
         <HeaderBar />
         <Content>{children}</Content>
         <Footerbar />
      </>
   )
}

export default MainLayout;