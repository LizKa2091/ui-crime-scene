import { type FC } from 'react';
import { Layout, Menu, Button, Table, Badge, Flex, Card } from 'antd';
import { BarChartOutlined, SettingOutlined, FileOutlined } from '@ant-design/icons';
import CrimeHint from '../../CrimeHint/CrimeHint';

import styles from './DashboardScene.module.scss';

interface IProjectItem {
   key: string;
   name: string;
   status: 'active' | 'paused' | 'done';
   owner: string;
}

const { Sider, Content } = Layout;

const DashboardScene: FC = () => {
   const dataSource: IProjectItem[] = [];

   const columns = [
      { title: 'Проект', dataIndex: 'name', key: 'name' },
      { 
         title: 'Статус', 
         dataIndex: 'status', 
         key: 'status',
         render: (status: string) => (
            <CrimeHint errorId={4}>
               <Badge color={status === 'done' ? 'green' : 'red'} />
            </CrimeHint>
         )
      },
   ];

   return (
      <Layout className={styles.dashboardLayout}>
         <CrimeHint errorId={1}>
            <Sider width={170}>
               <Menu
                  mode="inline"
                  defaultSelectedKeys={['1']}
                  items={[
                     { key: '1', icon: <FileOutlined />, label: 'Проекты' },
                     { key: '2', icon: <BarChartOutlined />, label: 'Отчёты' },
                     { key: '3', icon: <SettingOutlined />, label: 'Настройки' },
                     { key: '4', icon: <SettingOutlined />, label: 'Профиль' },
                     { key: '5', icon: <SettingOutlined />, label: 'Доступ' },
                     { key: '6', icon: <SettingOutlined />, label: 'UI Crime' },
                  ]}
               />
            </Sider>
         </CrimeHint>

         <Content className={styles.content}>
            <Flex justify="space-between" align="center" className={styles.topButtons}>
               <CrimeHint errorId={2}>
                  <Flex gap="small">
                     <Button icon={<BarChartOutlined />} />
                     <Button icon={<SettingOutlined />} />
                  </Flex>
               </CrimeHint>
            </Flex>

            <Card title="Активные проекты" className={styles.tableContainer}>
               <CrimeHint errorId={3}>
                  <Table 
                     columns={columns} 
                     dataSource={dataSource} 
                     pagination={false}
                  />
               </CrimeHint>
            </Card>

            <CrimeHint errorId={5}>
               <div className={styles.chartContainer}>
                  <div className={styles.fakeChart}>
                     <p>Chart widget</p>
                  </div>
               </div>
            </CrimeHint>
         </Content>
      </Layout>
   );
};

export default DashboardScene;