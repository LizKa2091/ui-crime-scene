import { type FC } from 'react';
import { Flex } from 'antd';
import CrimeHint from '../../CrimeHint/CrimeHint';

import styles from './BlogScene.module.scss';
import { PaperClipOutlined } from '@ant-design/icons';

const BlogScene: FC = () => {
   return (
      <Flex vertical justify='center' align='center' gap='small'>
         <CrimeHint errorId={3}>
            <h2>Blog Scene</h2>
         </CrimeHint>

         <Flex vertical align="center" gap="middle">
            <PaperClipOutlined />

            <CrimeHint errorId={2}>
               <h3 className={styles.subtitle}>Дизайн — это не просто красиво</h3>
            </CrimeHint>

            <CrimeHint errorId={1}>
               <article>
                  <p>
                     Пользовательский интерфейс — это не просто кнопки и цвета. Это способ взаимодействия
                     между человеком и машиной. Когда дизайнер делает строки длиной 150 символов, это
                     превращает чтение в марафон глазами. Держите длину строки в пределах 50–75 символов.
                  </p>
                  <p>
                     В противном случае вы получите "визуальную усталость", что снижает вовлечённость и
                     делает ваш продукт скучным для чтения.
                  </p>
               </article>
            </CrimeHint>
         </Flex>
      </Flex>
   )
}

export default BlogScene;