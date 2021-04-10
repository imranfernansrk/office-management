import React from "react";
import HeaderTabs from "./headerTabs";
import MainContent from "./mainContent";

import { Layout, Typography } from 'antd'

import './styles/homepageDemo.css'
import AboutUs from "./aboutUs";

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

const HomepageDemo = () => {
    return (
        <Layout >
            <Layout className="HEADER_CONTENT_LAYOUT">
                <Header className="HOMEPAGE_HEADER" style={{padding: 0}}>
                    <HeaderTabs />
                </Header>
                <Content className="HOMEPAGE_CONTENT">
                    <MainContent />
                </Content>
            </Layout>
            <Layout>
                <Footer className="FOOTER_CONTENT">
                    <Title level={2}>About Us</Title>
                    <AboutUs />
                    </Footer>
            </Layout>
        </Layout>
    )
}

export default HomepageDemo;
