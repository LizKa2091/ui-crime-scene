import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styles from './HeaderBar.module.scss';

const HeaderBar: FC = () => {
   return (
      <Header className={styles.header}>
         <Flex align='center' justify='space-between' className={styles.headerContainer}>
            <h1>UI Crime Scene</h1>
            <p>Найдено: 2/4</p>
            <Link to='/'>На главную</Link>
         </Flex>
      </Header>
   )
}

export default HeaderBar;