import React, {useState} from "react";
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import "./styles.css";

const Header = () => {
    const [activeTabKey, setActiveTabKey] = useState<string>('')

    const callback = (key: any) => {
        setActiveTabKey(key.key)
        console.log(key.key);
    }
    return (
        <Menu className="homepage-header-menus" theme="light" mode="horizontal" defaultSelectedKeys={[activeTabKey]} onSelect={(selectedKey)=>callback(selectedKey)}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Services</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
            <Menu.Item key="4">About Us</Menu.Item>
            <Menu.Item key="5"><Link to="/login">Get Started</Link></Menu.Item>
        </Menu>
    )
};

export default Header;