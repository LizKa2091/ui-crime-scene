import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Flex } from 'antd';
import { Header } from 'antd/es/layout/layout';

import { useAppSelector } from '../../store/store';

import styles from './HeaderBar.module.scss';
import DetectivePassport from '../DetectivePassport/DetectivePassport';

const HeaderBar: FC = () => {
   const { errors, foundCount } = useAppSelector((state) => state.crime);
   const maxErrorsCount: number = errors.length;

   return (
      <Header className={styles.header}>
         <Flex align='center' justify='space-between' className={styles.headerContainer}>
            <h1>UI Crime Scene</h1>
            {maxErrorsCount > 0 &&
               <p>Найдено ошибок: {foundCount}/{maxErrorsCount}</p>
            }
            <DetectivePassport />
            <Link to='/'>На главную</Link>
         </Flex>
      </Header>
   )
}

export default HeaderBar;
