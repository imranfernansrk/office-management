import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HeaderTitle } from "../../constants";

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
            <Menu.Item key="1">{HeaderTitle.HOME}</Menu.Item>
            <Menu.Item key="2">{HeaderTitle.SERVICES}</Menu.Item>
            <Menu.Item key="3">{HeaderTitle.CONTACT}</Menu.Item>
            <Menu.Item key="4">{HeaderTitle.ABOUT_US}</Menu.Item>
            <Menu.Item key="5"><Link className="get-started-link" to="/login">{HeaderTitle.Get_STARTED}</Link></Menu.Item>
        </Menu>
    )
};

export default Header;