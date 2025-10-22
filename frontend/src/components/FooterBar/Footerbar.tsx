import { type FC } from 'react';
import { Footer } from 'antd/es/layout/layout';

import ModalPortal from '../ModalPortal/ModalPortal';

const Footerbar: FC = () => {
   return (
      <Footer>
         <ModalPortal />
      </Footer>
   )
}

export default Footerbar;