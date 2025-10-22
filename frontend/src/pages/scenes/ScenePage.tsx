import { useEffect, type FC, lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Flex } from 'antd';

import { useAppDispatch } from '../../store/store';
import { crimeErrors } from '../../data/crimeData';
import { setScene } from '../../store/crimeSlice';
import { getSceneIdByName } from '../../utils/getSceneIdByName';

const scenes = {
   login: lazy(() => import('../../components/scenes/LoginScene/LoginScene')),
   shop: lazy(() => import('../../components/scenes/ShopScene/ShopScene')),
   blog: lazy(() => import('../../components/scenes/BlogScene/BlogScene'))
}

const ScenePage: FC = () => {
   const { sceneName } = useParams();
   const navigate = useNavigate();

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (sceneName) {
         const sceneId: number | null = getSceneIdByName(sceneName);

         if (sceneId) dispatch(setScene({ sceneId }))
      }
   }, [dispatch, sceneName]);

   if ((!sceneName || !(sceneName in crimeErrors))) {
      return (
         <Flex vertical justify='center' align='center'>
            <h2>Страница не найдена</h2>
            <Button onClick={() => navigate(-1)}>Вернуться назад</Button>
         </Flex>
      );
   }

   const CurrScene = scenes[sceneName as keyof typeof scenes];

   return (
      <Suspense fallback={<p>Загрузка...</p>}>
         <CurrScene />
      </Suspense>
   )
}

export default ScenePage;