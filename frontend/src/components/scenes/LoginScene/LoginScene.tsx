import { useState, type FC } from 'react';
import { Button, Flex, Form, Input } from 'antd';

import styles from './LoginScene.module.scss';

interface IFormData {
   login: string;
   password: string;
}

const LoginScene: FC = () => {
   const [form] = Form.useForm<IFormData>();
   const [isError, setIsError] = useState<boolean>(false);

   const onFinishForm = () => {
      setIsError(false);
   }

   const onFailedFinishForm = () => {
      setIsError(true)
   }

   return (
      <Flex vertical className='sceneContainer'>
         <Flex vertical gap='middle'>
            <h3>Login scene</h3>
            <Form 
               form={form} 
               onFinish={onFinishForm} 
               onFinishFailed={onFailedFinishForm} 
               autoComplete='off'
               validateMessages={{ required: '' }}
               className={styles.form}
            >
               <Form.Item<IFormData> 
                  name='login'
                  rules={[{ required: true }]}
                  hasFeedback={false}
                  validateStatus={isError ? 'error' : ''}
               >
                  <Input placeholder='Ваш логин' className={styles.formInput} />   
               </Form.Item>
               <Form.Item<IFormData> 
                  name='password'
                  rules={[{ required: true }]}
                  hasFeedback={false}
                  validateStatus={isError ? 'error' : ''}
               >
                  <Input.Password placeholder='Ваш пароль' autoComplete='current-password' className={styles.formInput} />
               </Form.Item>
               <Flex 
                  vertical 
                  justify='center' 
                  align='center' 
                  gap='small' 
                  className={styles.buttonContainer}
               >
                  <Button htmlType='submit'>Войти</Button>
                  {isError && (
                     <p className='error-message'>Необходимо исправить ошибку</p>
                  )}
               </Flex>
            </Form>
         </Flex>
      </Flex>
   )
}

export default LoginScene;