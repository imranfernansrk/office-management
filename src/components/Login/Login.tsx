import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Tabs } from 'antd';
import ManagerLogin from "./ManagerLogin";
import EmployeeLogin from "./EmployeeLogin";

import "./styles.css"

const { TabPane } = Tabs;
export const Login = () => {

    const [ loggedManager, setLoggedManager] = useState(false);
    const [ loggedEmployee, setLoggedEmployee] = useState(false);

    useEffect(() => {
        if(sessionStorage.length > 0){
            if(sessionStorage.getItem('managerAuth') != null){
                setLoggedManager(true);
            }else if(sessionStorage.getItem('employeeAuth') != null){
                setLoggedEmployee(true);
            }
        }
    }, [])

    if(loggedManager){
        <Redirect to="/managerProfile/" />
    }
    if(loggedEmployee){
        <Redirect to="/employeeProfile/" />
    }
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