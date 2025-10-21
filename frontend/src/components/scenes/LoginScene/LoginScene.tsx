import { type FC } from 'react';
import { Button, Flex, Form, Input } from 'antd';

import styles from './LoginScene.module.scss';

interface IFormData {
   login: string;
   password: string;
}

const LoginScene: FC = () => {
   const onFailedFinishForm = () => {
      
   }

   return (
      <Flex vertical className='sceneContainer'>
         <Flex vertical gap='middle'>
            <h3>Login scene</h3>
            <Form onFinishFailed={onFailedFinishForm} autoComplete='off' className={styles.form}>
               <Form.Item<IFormData> 
                  name='login'
                  rules={[{ required: true, message: 'Логин не может быть пустым' }]}
               >
                  <Input placeholder='Ваш логин' className={styles.formInput} />   
               </Form.Item>
               <Form.Item<IFormData> 
                  name='password'
                  rules={[{ required: true, message: 'Пароль не может быть пустым' }]}
               >
                  <Input.Password placeholder='Ваш пароль' autoComplete='current-password' className={styles.formInput} />
               </Form.Item>
               <Flex justify='center' align='center' className={styles.buttonContainer}>
                  <Button htmlType='submit'>Войти</Button>
               </Flex>
            </Form>
         </Flex>
      </Flex>
   )
}

export default LoginScene;