import { type FC } from 'react';
import { Flex } from 'antd';
import { useAppDispatch } from '../../store/store';
import { markFoundError, setScene } from '../../store/crimeSlice';

const BlogScene: FC = () => {
   const dispatch = useAppDispatch();
   dispatch(setScene('blog'));

   const handleErrorClick = () => {
      dispatch(markFoundError({ errorId: 1 }));
   };

   return (
      <Flex>
         <h2>blog scene</h2>
         <Flex onClick={handleErrorClick}>я ошибка, нажми на меня</Flex>
      </Flex>
   );
};

export default BlogScene;
