import { useState, type FC } from 'react';
import { Progress, Card, Flex, Button } from 'antd';
import { useAppSelector } from '../../store/store';
import { getDetectiveStats } from '../../utils/getDetectiveStats';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

import styles from './DetectivePassport.module.scss';

const DetectivePassport: FC = () => {
   const [isActive, setIsActive] = useState<boolean>(true);

   const stats = useAppSelector(getDetectiveStats);
   const completedScenes = useAppSelector((state) => state.crime.scenesProgress
      .filter((scene) => scene.status === 'complete'));

   return (
      <Card className={styles.passport}>
         <Flex className={styles.displayButtonContainer}>
            <Button 
               onClick={() => setIsActive(prev => !prev)} 
               icon={isActive ? <MinusOutlined /> : <PlusOutlined />} 
               size='small'
            />
         </Flex>
         <Flex vertical align='center' gap='small'>
            <h3>Паспорт детектива</h3>
            {isActive && (
               <>
                  <p className={styles.rank}>звание: {stats.rank}</p>
                  <Progress
                     percent={stats.progressPercent}
                     strokeColor="#ffcc00"
                     trailColor="#333"
                     style={{ width: '100%' }}
                  />
                  <p>Раскрыто: {stats.completedAmount} / {stats.totalScenes} ({stats.progressPercent}%) сцен</p>

                  <div className={styles.completedList}>
                     <p>Раскрытые сцены:</p>
                     <ul>
                        {completedScenes.map((scene) => 
                           <li key={scene.id}>{scene.sceneName}</li>
                        )}
                     </ul>
                  </div>
               </>
            )}
         </Flex>
      </Card>
   );
};

export default DetectivePassport;