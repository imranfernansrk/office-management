import React, {useState} from "react";
import { Redirect, Link } from 'react-router-dom';

import { Tabs, Menu } from 'antd';

const { TabPane } = Tabs;

const HeaderTabs = () => {
    const [activeTabKey, setActiveTabKey] = useState<string>('')

    const callback = (key: any) => {
        setActiveTabKey(key.key)
        console.log(key.key);
        // if(key.key == '5'){
        //     return(
        //         <Redirect to='/login' />
        //     )
        // }
    }

    return (
    //     <Tabs style={{display:"flex", justifyContent:"right"}} defaultActiveKey={activeTabKey} onChange={(activeKey)=>callback(activeKey)}>
    //     <TabPane tab="Tab 1" key="1">
    //       Content of Tab Pane 1
    //     </TabPane>
    //     <TabPane tab="Tab 2" key="2">
    //       Content of Tab Pane 2
    //     </TabPane>
    //     <TabPane tab="Tab 3" key="3">
    //       Content of Tab Pane 3
    //     </TabPane>
    //   </Tabs>
        <Menu className="HOMEPAGE_HEADER_MENUS" theme="light" mode="horizontal" defaultSelectedKeys={[activeTabKey]} onSelect={(selectedKey)=>callback(selectedKey)}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Services</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
            <Menu.Item key="4">About Us</Menu.Item>
            <Menu.Item key="5"><Link to="/login">Get Started</Link></Menu.Item>
        </Menu>
    )
};

export default HeaderTabs;