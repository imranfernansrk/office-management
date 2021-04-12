import React from "react";
import {Header as HeaderTab} from "../Header";
import MainContent from "./HomepageBody";
import AboutUs from "./AboutUs";
import { Layout, Typography } from 'antd';

import './styles.css'
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const HomepageDemo = () => {
    return (
        <Layout >
            <Layout className="header-content-layout">
                <Header className="homepage-header" style={{padding: 0}}>
                    <HeaderTab />
                </Header>
                <Content className="homepage-content">
                    <MainContent />
                </Content>
            </Layout>
            <Layout>
                <Footer className="footer-content">
                    <Title level={2}>About Us</Title>
                    <AboutUs />
                    </Footer>
            </Layout>
        </Layout>
    )
}

export default HomepageDemo;
