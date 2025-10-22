import { useEffect } from 'react';
import { Button, Flex, Tag } from 'antd';
import clsx from 'clsx';

import { useAppDispatch } from '../../../store/store';
import { setScene } from '../../../store/crimeSlice';

import CrimeHint from '../../CrimeHint/CrimeHint';

import styles from './ShopScene.module.scss';

import tshirtImg from '../../../assets/images/shopScene/t-shirt.jpg';
import shoesImg from '../../../assets/images/shopScene/shoes.jpg';
import bagImg from '../../../assets/images/shopScene/bag.jpg';

const ShopScene = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setScene({ sceneId: 2 }));
   }, [dispatch]);

   return (
      <Flex vertical gap='large'>
         <h2>Shop Scene</h2>
         <Flex vertical justify='center' align='center' gap='large'>
            <Flex vertical justify='center' align='center' gap='small' className={styles.shopItem}>
               <img src={tshirtImg} alt="shirt" />
               <h3>Футболка Oversize</h3>
               <p>19.99$</p>
               <p>Варианты цветов:</p>
               <CrimeHint errorId={1}>
                  <Flex wrap gap='small'>
                     {Array.from({ length: 12 }).map((_, i) => (
                        <Tag key={i} className={clsx(styles.colorItem, styles.item)}>#{i + 1}</Tag>
                     ))}
                  </Flex>
                  
               </CrimeHint>
               <Button type="primary" onClick={()=>{}}>В корзину</Button>
            </Flex>
            
            <Flex vertical justify='center' align='center' gap='small' className={styles.shopItem}>
               <img src={shoesImg} alt="shoes" />
               <CrimeHint errorId={2}>
                  <Flex vertical gap='small'>
                     <h3>Кроссовки Runner</h3>
                     <Button type="primary">Купить</Button>
                  </Flex>
               </CrimeHint>
            </Flex>

            <CrimeHint errorId={3}>
               <Flex vertical justify='center' align='center' gap='small' className={styles.shopItem}>
                  <img src={bagImg} alt="bag" />
                  <h3>Сумка Casual</h3>
                  <p>349.99$</p>
                  <Button shape="circle" icon={<span>👜</span>} />
               </Flex>
            </CrimeHint>
         </Flex>
      </Flex>
   );
};

export default ShopScene;