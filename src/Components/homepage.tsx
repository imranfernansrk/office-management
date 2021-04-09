import React, { useState } from "react";
import EmployeeLogin from "./employeeLogin";
import ManagerLogin from "./managerLogin";
import { Button } from 'antd'

import "./styles/homepage.css";

const Homepage: React.FC = () => {
    const [needManagerProfile, setNeedManagerProfile] = useState<boolean>(false)
    const [needEmployeeProfile, setNeedEmployeeProfile] = useState<boolean>(false)
    const [showLogoutButton, setShowLogoutButton] = useState<boolean>(false)
    const [onFocusProfile, setOnFocusProfile] = useState({
        managerProfile: true,
        employeeProfile: true
    })


    const onClickManagerLogin = () => {
        setNeedManagerProfile(true)
        setNeedEmployeeProfile(false)
        setShowLogoutButton(false)
        setOnFocusProfile({
            managerProfile: false,
            employeeProfile: true
        });
    }
    const onClickEmployeeLogin = () => {
        setNeedManagerProfile(false)
        setNeedEmployeeProfile(true)
        setShowLogoutButton(false)
        setOnFocusProfile({
            managerProfile: true,
            employeeProfile: false
        });
    }
    const onClickLogoutButton = () => {
        setNeedManagerProfile(false)
        setNeedEmployeeProfile(false)
        setShowLogoutButton(false)
    }
    const onClickSignup = () => {
        setNeedManagerProfile(false)
        setNeedEmployeeProfile(false)
    }
    return (
        <div className="HOMEPAGE_CONTAINER">
            <div className="HOMEPAGE_NAVBAR">
                <Button.Group>
                    <Button
                        type="default"
                        ghost={onFocusProfile.managerProfile}
                        className=""
                        onClick={() => onClickManagerLogin()}>
                        Manager
                </Button>
                    <Button
                        type="default"
                        ghost={onFocusProfile.employeeProfile}
                        className=""
                        onClick={() => onClickEmployeeLogin()}>
                        Employee
                </Button>
                </Button.Group>
                {
                    showLogoutButton ? (<Button
                        type="dashed"
                        className="float-right"
                        onClick={() => onClickLogoutButton()}>
                        Log Out
                    </Button>) : null
                }
                {/* <button className="btn btn-secondary mr-3" onClick={() => onClickManagerLogin()}>Manager</button>
                <button className="btn btn-secondary" onClick={() => onClickEmployeeLogin()}>Employee</button>
                {
                    showLogoutButton ? (<button className="btn btn-danger float-right" onClick={()=>onClickLogoutButton()}>Log Out</button>) : null
                } */}
            </div>
            <div className="HOMEPAGE_PROFILE_CONTAINER">
                {
                    needManagerProfile ? (<ManagerLogin showLogoutButton={setShowLogoutButton} />) : null
                }
                {
                    needEmployeeProfile ? (<EmployeeLogin showLogoutButton={setShowLogoutButton} />) : null
                }
            </div>
        </div>
    )
}

export default Homepage;