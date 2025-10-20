import { type FC } from 'react'
import { Button, Card } from 'antd';
import { Link } from 'react-router-dom';

import type { sceneStatus } from '../../types/crimeTypes';

import styles from './SceneItem.module.scss';

interface ISceneItem {
   title: string;
   progress: sceneStatus;
}

const SceneItem: FC<ISceneItem> = ({ title, progress }) => {
   return (
      <Card title={`Сцена: ${title}`} size='small' className={styles.card}>
         <p>Статус: {progress}</p>
         <Link to={`/scene/${title}`}>
            <Button className={styles.cardButton}>Перейти</Button>
         </Link>
      </Card>
   )
}

export default SceneItem;
