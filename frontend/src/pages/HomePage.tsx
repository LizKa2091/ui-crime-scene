import { useEffect, type FC } from 'react';
import { Flex } from 'antd';

import { useScenesProgress } from '../hooks/useScenesProgress';
import { useAppDispatch } from '../store/store';

import SceneItem from '../components/SceneItem/SceneItem';
import { showModal } from '../store/modalSlice';

const HomePage: FC = () => {
   const scene = useScenesProgress();
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(showModal({ activeModal: 'about' }));
   }, [dispatch]);

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
