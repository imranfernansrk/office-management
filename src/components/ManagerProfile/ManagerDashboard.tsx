import React, { useState } from "react";
import { ManagerProfileString, ManagerProfileTitle } from "../../constants";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import "./styles.css"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ManagerDashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout className="manager-dashboard-layout">
      <Sider collapsible collapsed={collapsed} onCollapse={(e) => onCollapse(e)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            {ManagerProfileTitle.USERNAME}
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            {ManagerProfileTitle.OPTION_1}
          </Menu.Item>
          <SubMenu key="sub1" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="3">{ManagerProfileTitle.TEAM_1}</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<FileOutlined />}>
            {ManagerProfileTitle.TEAM_1}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <Content className="header-content">
          <Breadcrumb className="bread-crumb-container" >
            <Breadcrumb.Item>{ManagerProfileTitle.USER}</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <Footer>{ManagerProfileString.FOOTER_CONTENT}</Footer>
      </Layout>
    </Layout>
  );
}

export default ManagerDashboard;