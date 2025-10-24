import { type FC } from 'react';
import { Footer } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';
import { ExportOutlined } from '@ant-design/icons';

import styles from './Footerbar.module.scss';

const Footerbar: FC = () => {
   return (
      <Footer className={styles.footer}>
         <p>Проект создан LizKa2091 <Link to='https://github.com/LizKa2091' target='_blank' data-testid='footer-link'>Github <ExportOutlined /></Link></p>
      </Footer>
   )
}

export default Footerbar;