import { useEffect, type FC } from 'react';
import { Flex } from 'antd';
import { useAppDispatch } from '../../store/store';
import { markFoundError, setScene } from '../../store/crimeSlice';

const ShopScene: FC = () => {
   const dispatch = useAppDispatch();
   
   useEffect(() => {
      dispatch(setScene({ sceneId: 2 }));
   }, [dispatch]);

   const handleErrorClick = () => {
      dispatch(markFoundError({ errorId: 1 }));
   };

   return (
      <Flex>
         <h2>shop scene</h2>
         <Flex onClick={handleErrorClick}>я ошибка, нажми на меня</Flex>
      </Flex>
   );
};

export default ShopScene;
