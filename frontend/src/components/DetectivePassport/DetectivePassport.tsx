import { type FC } from 'react';
import { Progress, Card, Flex } from 'antd';
import { useAppSelector } from '../../store/store';
import { getDetectiveStats } from '../../utils/getDetectiveStats';

import styles from './DetectivePassport.module.scss';

const DetectivePassport: FC = () => {
   const stats = useAppSelector(getDetectiveStats);

   return (
      <Card className={styles.passport}>
         <Flex vertical align='center' gap='small'>
         <h3>Паспорт детектива</h3>
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
               {useAppSelector((state) =>
                  state.crime.scenesProgress
                     .filter((scene) => scene.status === 'complete')
                     .map((scene) => 
                        <li key={scene.id}>{scene.sceneName}</li>
                     )
               )}
            </ul>
         </div>
         </Flex>
      </Card>
   );
};

export default DetectivePassport;