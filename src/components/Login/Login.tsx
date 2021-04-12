import React, { useState } from "react";
import { Tabs } from 'antd';
import ManagerLogin from "./ManagerLogin";
import EmployeeLogin from "./EmployeeLogin";

import "./styles.css"

const { TabPane } = Tabs;
export const Login = () => {
    const [showLogoutButton, setShowLogoutButton] = useState<boolean>(false)

    return (
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Tabs size="large" className="login-page-menu" defaultActiveKey={''}>
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