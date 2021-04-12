import React, { useState } from "react";
import { Tabs } from 'antd';
import ManagerLogin from "./ManagerLogin";
import EmployeeLogin from "./EmployeeLogin";

import "./styles.css"

const { TabPane } = Tabs;
export const Login = () => {
    return (
        <div className="login-container">
        <Tabs size="large" className="login-page-menu" defaultActiveKey={''}>
                <TabPane tab="Manager" key="1" className="login-tab-pane">
                <ManagerLogin />
         </TabPane>
                <TabPane tab="Employee" key="2" className="login-tab-pane">
                <EmployeeLogin />
         </TabPane>
        </Tabs>
        </div>
    )
}