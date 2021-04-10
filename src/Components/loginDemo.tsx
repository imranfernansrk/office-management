import React, { useState } from "react";

import { Tabs, Menu } from 'antd';
import "./styles/loginDemo.css"
import ManagerLogin from "./managerLogin";
import EmployeeLogin from "./employeeLogin";
const { TabPane } = Tabs;

const LoginDemo = () => {
    const [showLogoutButton, setShowLogoutButton] = useState<boolean>(false)

    return (

        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            {/* <Menu className="MAIN_LOGIN_MENU" theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <ManagerLogin showLogoutButton={setShowLogoutButton}/>
            </Menu.Item>
            <Menu.Item key="2">Employee</Menu.Item>
        </Menu> */}
        <Tabs size="large" className="MAIN_LOGIN_MENU" defaultActiveKey={''}>
                <TabPane tab="Manager" key="1" style={{minWidth:'100%'}}>
                <ManagerLogin showLogoutButton={setShowLogoutButton}/>
         </TabPane>
                <TabPane tab="Employee" key="2" style={{minWidth:'100%'}}>
                <EmployeeLogin showLogoutButton={setShowLogoutButton}/>
         </TabPane>
        </Tabs>
        </div>
    )
}
export default LoginDemo;