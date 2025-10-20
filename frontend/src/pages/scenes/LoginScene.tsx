import { useEffect, type FC } from 'react';
import { Flex } from 'antd';
import { useAppDispatch } from '../../store/store';
import { markFoundError, setScene } from '../../store/crimeSlice';

const LoginScene: FC = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setScene({ sceneId: 1 }));
   }, [dispatch]);

   const handleErrorClick = () => {
      dispatch(markFoundError({ errorId: 1 }));
   };

   return (
      <Flex>
         <h2>login scene</h2>
         <Flex onClick={handleErrorClick}>я ошибка, нажми на меня</Flex>
      </Flex>
   );
};

export default LoginScene;
