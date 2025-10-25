import { type FC } from 'react';
import { Button, Input, Flex, Card } from 'antd';
import { Footer } from 'antd/es/layout/layout';

import CrimeHint from '../../CrimeHint/CrimeHint';

import styles from './LandingScene.module.scss';
import { SendOutlined } from '@ant-design/icons';

const LandingScene: FC = () => {
   return (
      <Flex vertical align='center' justify='center' gap='large' className={styles.landingContainer}>
         <Flex vertical align='center' justify='center' gap='small'>
            <h1>Super UX Product</h1>
            <CrimeHint 
               errorId={1}
            >
               <Button type="primary" className={styles.landingButton}>
                  Попробовать
               </Button>
            </CrimeHint>
         </Flex>

         <Flex justify='space-around'>
            <Flex wrap="wrap" gap={24}>
               <Card title="Быстро">Суперскорость</Card>
               <Card title="Надёжно">Без ошибок</Card>
               <Card title="Удобно">Современно</Card>
            </Flex>
         </Flex>

         <Flex vertical align='center' justify='center' gap='small'>
            <h3>Подпишитесь на новости</h3>
            <Flex gap="small" justify="center">
               <CrimeHint 
                  errorId={2}
               >
                  <Input placeholder="Type something..." />
               </CrimeHint>

               <CrimeHint 
                  errorId={3}
               >
                  <Button shape="circle" icon={<SendOutlined />} />
               </CrimeHint>
            </Flex>
         </Flex>

         <CrimeHint errorId={4}>
            <Footer className={styles.footer}>
               <p>© 2025 Super UX Product. All rights reserved.</p>
            </Footer>
         </CrimeHint>
      </Flex>
   );
};

export default LandingScene;
