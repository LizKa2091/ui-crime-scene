import { type FC } from 'react';
import { Flex } from 'antd';

import { useScenesProgress } from '../hooks/useScenesProgress';

import SceneItem from '../components/SceneItem/SceneItem';

const HomePage: FC = () => {
   const scene = useScenesProgress();

   return (
      <Flex justify='center' align='center'>
         {scene && 
            <Flex vertical align='center' gap='large'>
               <h2>Выберите сцену</h2>
               <SceneItem title={scene.sceneName} progress={scene.status} />
            </Flex>
         }
      </Flex>
   )
};

export default HomePage;
